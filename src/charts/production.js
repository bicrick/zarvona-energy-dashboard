import { appState } from '../config.js';

// Custom tooltip positioner to follow cursor
const cursorTooltipPositioner = function(elements, eventPosition) {
    return {
        x: eventPosition.x,
        y: eventPosition.y
    };
};

// Register custom tooltip positioner
if (typeof Chart !== 'undefined' && Chart.Tooltip) {
    Chart.Tooltip.positioners.cursor = cursorTooltipPositioner;
}

export function renderProductionCharts(well, startDate = null, endDate = null) {
    const wrapper = document.getElementById('productionChartsWrapper');

    appState.currentWellData = well;

    Object.values(appState.wellProductionCharts).forEach(chart => {
        if (chart) chart.destroy();
    });
    appState.wellProductionCharts = {};

    wrapper.innerHTML = '';

    const production = well.production || [];
    const wellTests = well.wellTests || [];

    const allDates = production
        .filter(item => item.date)
        .map(item => new Date(item.date))
        .filter(d => !isNaN(d.getTime()));

    if (allDates.length > 0) {
        appState.productionDateRange.min = new Date(Math.min(...allDates));
        appState.productionDateRange.max = new Date(Math.max(...allDates));
        initializeDatePickers(startDate, endDate);
    }

    const chartConfigs = [
        { key: 'oil', label: 'Oil (BBL)', unit: 'BBL', color: '#78716c', dataKey: 'oil', source: 'production' },
        { key: 'water', label: 'Water (BBL)', unit: 'BBL', color: '#3b82f6', dataKey: 'water', source: 'production' },
        { key: 'gas', label: 'Gas (MCF)', unit: 'MCF', color: '#22c55e', dataKey: 'gas', source: 'production' }
    ];

    const availableCharts = chartConfigs.filter(config => {
        const dataSource = config.source === 'production' ? production : wellTests;
        return dataSource.some(item =>
            item[config.dataKey] !== null &&
            item[config.dataKey] !== undefined &&
            !isNaN(item[config.dataKey])
        );
    });

    if (availableCharts.length === 0) {
        wrapper.innerHTML = '<div class="chart-placeholder">No production data available</div>';
        return;
    }

    availableCharts.forEach(config => {
        const section = document.createElement('div');
        section.className = 'chart-section';
        section.innerHTML = `
            <div class="chart-label">${config.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${config.key}"></canvas>
            </div>
        `;
        wrapper.appendChild(section);

        const dataSource = config.source === 'production' ? production : wellTests;

        let chartData = dataSource
            .filter(item => item.date && item[config.dataKey] !== null && item[config.dataKey] !== undefined)
            .map(item => ({
                x: new Date(item.date),
                y: Number(item[config.dataKey])
            }))
            .filter(p => !isNaN(p.y))
            .sort((a, b) => a.x - b.x);

        if (startDate || endDate) {
            chartData = chartData.filter(point => {
                const pointDate = point.x.getTime();
                if (startDate && pointDate < startDate.getTime()) return false;
                if (endDate && pointDate > endDate.getTime()) return false;
                return true;
            });
        }

        const ctx = document.getElementById(`chart-${config.key}`).getContext('2d');
        appState.wellProductionCharts[config.key] = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: config.label,
                    data: chartData,
                    backgroundColor: config.color,
                    borderColor: config.color,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        position: 'cursor',
                        backgroundColor: '#282c33',
                        titleColor: '#e8e9eb',
                        bodyColor: '#e8e9eb',
                        callbacks: {
                            title: (context) => {
                                const date = new Date(context[0].parsed.x);
                                return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                            },
                            label: (context) => `${config.label}: ${context.parsed.y}`
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            displayFormats: {
                                day: 'MMM-yy',
                                week: 'MMM-yy',
                                month: 'MMM-yy',
                                quarter: 'MMM-yy',
                                year: 'yyyy'
                            }
                        },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab', maxTicksLimit: 8 }
                    },
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: config.unit, color: '#9ea3ab' },
                        grid: { color: '#3a3f47' },
                        ticks: { color: '#9ea3ab' }
                    }
                }
            },
            plugins: [{
                id: 'crosshair',
                afterDatasetsDraw: (chart) => {
                    if (chart.tooltip?._active?.length) {
                        const ctx = chart.ctx;
                        const activePoint = chart.tooltip._active[0];
                        const x = activePoint.element.x;
                        const topY = chart.scales.y.top;
                        const bottomY = chart.scales.y.bottom;

                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(x, topY);
                        ctx.lineTo(x, bottomY);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#9ea3ab';
                        ctx.setLineDash([5, 5]);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }]
        });
    });
}

function initializeDatePickers(startDate = null, endDate = null) {
    const startInput = document.getElementById('productionStartDate');
    const endInput = document.getElementById('productionEndDate');
    const resetBtn = document.getElementById('btnResetDates');

    if (!startInput || !endInput || !appState.productionDateRange.min || !appState.productionDateRange.max) return;

    const formatForInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    const minStr = formatForInput(appState.productionDateRange.min);
    const maxStr = formatForInput(appState.productionDateRange.max);

    startInput.min = minStr;
    startInput.max = maxStr;
    endInput.min = minStr;
    endInput.max = maxStr;

    startInput.value = startDate ? formatForInput(startDate) : minStr;
    endInput.value = endDate ? formatForInput(endDate) : maxStr;

    const newStartInput = startInput.cloneNode(true);
    const newEndInput = endInput.cloneNode(true);
    const newResetBtn = resetBtn.cloneNode(true);

    startInput.parentNode.replaceChild(newStartInput, startInput);
    endInput.parentNode.replaceChild(newEndInput, endInput);
    resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);

    // Use blur instead of change to wait until user finishes typing
    newStartInput.addEventListener('blur', handleDateRangeChange);
    newEndInput.addEventListener('blur', handleDateRangeChange);
    
    // Also allow Enter key to trigger update
    newStartInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    });
    newEndInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    });
    
    newResetBtn.addEventListener('click', handleDateRangeReset);
}

function handleDateRangeChange() {
    if (!appState.currentWellData) return;

    const startInput = document.getElementById('productionStartDate');
    const endInput = document.getElementById('productionEndDate');

    const startDate = startInput.value ? new Date(startInput.value) : null;
    const endDate = endInput.value ? new Date(endInput.value + 'T23:59:59') : null;

    renderProductionCharts(appState.currentWellData, startDate, endDate);
}

function handleDateRangeReset() {
    if (!appState.currentWellData) return;
    renderProductionCharts(appState.currentWellData, null, null);
}
