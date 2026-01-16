import { appState, GAUGE_SHEETS } from '../config.js';
import { hasUploadedData, getBatteryProductionTimeSeries } from '../data-aggregation.js';
import { showView } from '../views.js';
import { loadSheetAggregateData } from '../firestore-storage.js';

export async function showOilChartView(startDate = null, endDate = null) {
    showView('oilChart');
    
    // Load battery production data only (not full well details)
    await ensureAggregateDataLoaded('oil');
    
    renderAggregateChart('oil', startDate, endDate);
}

export async function showWaterChartView(startDate = null, endDate = null) {
    showView('waterChart');
    
    // Load battery production data only (not full well details)
    await ensureAggregateDataLoaded('water');
    
    renderAggregateChart('water', startDate, endDate);
}

export async function showGasChartView(startDate = null, endDate = null) {
    showView('gasChart');
    
    // Load battery production data only (not full well details)
    await ensureAggregateDataLoaded('gas');
    
    renderAggregateChart('gas', startDate, endDate);
}

/**
 * Ensure battery-level aggregate data is loaded for sheets that need it
 * This is much faster than loading full well details
 */
async function ensureAggregateDataLoaded(dataType) {
    const loadPromises = [];
    
    for (const sheetId in appState.appData) {
        const sheetData = appState.appData[sheetId];
        if (!sheetData) continue;
        
        // Only load aggregate data if not already loaded
        if (!sheetData._aggregateLoaded) {
            loadPromises.push(loadSheetAggregateData(sheetId));
        }
    }
    
    if (loadPromises.length > 0) {
        console.log(`Loading aggregate data for ${loadPromises.length} sheets...`);
        await Promise.all(loadPromises);
        console.log('Aggregate data loaded');
    }
}


function renderAggregateChart(dataType, startDate = null, endDate = null) {
    const chartConfig = {
        oil: {
            canvasId: 'aggregateOilChart',
            label: 'Oil Production (BBL)',
            unit: 'BBL',
            color: '#78716c',
            dateRangeVar: 'oilChartDateRange',
            startDateId: 'oilChartStartDate',
            endDateId: 'oilChartEndDate',
            resetBtnId: 'btnResetOilDates',
            showFn: showOilChartView
        },
        water: {
            canvasId: 'aggregateWaterChart',
            label: 'Water Production (BBL)',
            unit: 'BBL',
            color: '#3b82f6',
            dateRangeVar: 'waterChartDateRange',
            startDateId: 'waterChartStartDate',
            endDateId: 'waterChartEndDate',
            resetBtnId: 'btnResetWaterDates',
            showFn: showWaterChartView
        },
        gas: {
            canvasId: 'aggregateGasChart',
            label: 'Gas Production (MCF)',
            unit: 'MCF',
            color: '#22c55e',
            dateRangeVar: 'gasChartDateRange',
            startDateId: 'gasChartStartDate',
            endDateId: 'gasChartEndDate',
            resetBtnId: 'btnResetGasDates',
            showFn: showGasChartView
        }
    };

    const config = chartConfig[dataType];
    if (!config) return;

    if (dataType === 'oil' && appState.aggregateOilChart) {
        appState.aggregateOilChart.destroy();
        appState.aggregateOilChart = null;
    } else if (dataType === 'water' && appState.aggregateWaterChart) {
        appState.aggregateWaterChart.destroy();
        appState.aggregateWaterChart = null;
    } else if (dataType === 'gas' && appState.aggregateGasChart) {
        appState.aggregateGasChart.destroy();
        appState.aggregateGasChart = null;
    }

    const selectedBatteries = getSelectedBatteries(dataType);
    const aggregation = appState.chartState[dataType]?.aggregation || 'month';
    appState.chartState[dataType].selectedBatteries = selectedBatteries;

    const { data, dateRange } = getBatteryProductionTimeSeries(
        dataType,
        startDate,
        endDate,
        aggregation,
        selectedBatteries
    );

    if (dataType === 'oil') {
        appState.oilChartDateRange = dateRange;
    } else if (dataType === 'water') {
        appState.waterChartDateRange = dateRange;
    } else if (dataType === 'gas') {
        appState.gasChartDateRange = dateRange;
    }

    initializeAggregateChartDatePickers(dataType, config, startDate, endDate, dateRange);

    const filterContainerIds = {
        oil: 'oilChartBatteries',
        water: 'waterChartBatteries',
        gas: 'gasChartBatteries'
    };
    const filterContainer = document.getElementById(filterContainerIds[dataType]);
    if (filterContainer && !filterContainer.querySelector('.explorer-battery')) {
        populateBatteriesFilter(dataType);
    }

    initializeAggregationHandlers(dataType);

    const canvas = document.getElementById(config.canvasId);
    if (!canvas) return;

    if (data.length === 0) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '14px Archivo, sans-serif';
        ctx.fillStyle = '#6b7280';
        ctx.textAlign = 'center';
        ctx.fillText('No production data available', canvas.width / 2, canvas.height / 2);
        return;
    }

    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: config.label,
                data: data,
                backgroundColor: config.color + '33',
                borderColor: config.color,
                borderWidth: 2,
                fill: true,
                tension: 0.1,
                pointRadius: 2,
                pointHoverRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#282c33',
                    titleColor: '#e8e9eb',
                    bodyColor: '#e8e9eb',
                    callbacks: {
                        title: (context) => {
                            const date = new Date(context[0].parsed.x);
                            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                        },
                        label: (context) => `${config.label}: ${context.parsed.y.toLocaleString()}`
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
                    ticks: { color: '#9ea3ab', maxTicksLimit: 12 }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: config.unit, color: '#9ea3ab' },
                    grid: { color: '#3a3f47' },
                    ticks: { color: '#9ea3ab' }
                }
            }
        }
    });

    if (dataType === 'oil') {
        appState.aggregateOilChart = chart;
    } else if (dataType === 'water') {
        appState.aggregateWaterChart = chart;
    } else if (dataType === 'gas') {
        appState.aggregateGasChart = chart;
    }
}

function initializeAggregateChartDatePickers(dataType, config, startDate, endDate, dateRange) {
    const startInput = document.getElementById(config.startDateId);
    const endInput = document.getElementById(config.endDateId);
    const resetBtn = document.getElementById(config.resetBtnId);

    if (!startInput || !endInput || !dateRange.min || !dateRange.max) return;

    const formatForInput = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    const minStr = formatForInput(dateRange.min);
    const maxStr = formatForInput(dateRange.max);

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

    const handleDateChange = () => {
        const start = newStartInput.value ? new Date(newStartInput.value) : null;
        const end = newEndInput.value ? new Date(newEndInput.value + 'T23:59:59') : null;
        config.showFn(start, end);
    };

    newStartInput.addEventListener('change', handleDateChange);
    newEndInput.addEventListener('change', handleDateChange);
    newResetBtn.addEventListener('click', () => config.showFn(null, null));
}

function getSelectedBatteries(dataType) {
    const containerIds = {
        oil: 'oilChartBatteries',
        water: 'waterChartBatteries',
        gas: 'gasChartBatteries'
    };
    const container = document.getElementById(containerIds[dataType]);
    if (!container) return null;

    const selected = new Set();
    container.querySelectorAll('.battery-checkbox:checked').forEach(cb => {
        if (cb.dataset.battery) selected.add(cb.dataset.battery);
    });

    return selected.size > 0 ? selected : null;
}

function rerenderAggregateChart(dataType) {
    const configMap = {
        oil: { startDateId: 'oilChartStartDate', endDateId: 'oilChartEndDate', showFn: showOilChartView },
        water: { startDateId: 'waterChartStartDate', endDateId: 'waterChartEndDate', showFn: showWaterChartView },
        gas: { startDateId: 'gasChartStartDate', endDateId: 'gasChartEndDate', showFn: showGasChartView }
    };

    const config = configMap[dataType];
    if (!config) return;

    const startInput = document.getElementById(config.startDateId);
    const endInput = document.getElementById(config.endDateId);
    const startDate = startInput && startInput.value ? new Date(startInput.value) : null;
    const endDate = endInput && endInput.value ? new Date(endInput.value + 'T23:59:59') : null;

    config.showFn(startDate, endDate);
}

function initializeAggregationHandlers(dataType) {
    const radios = document.querySelectorAll(`input[name="${dataType}Aggregation"]`);
    if (!radios.length) return;

    radios.forEach(radio => {
        const newRadio = radio.cloneNode(true);
        radio.parentNode.replaceChild(newRadio, radio);
    });

    const activeValue = appState.chartState[dataType]?.aggregation || 'month';
    document.querySelectorAll(`input[name="${dataType}Aggregation"]`).forEach(radio => {
        radio.checked = radio.value === activeValue;
        radio.addEventListener('change', (e) => {
            appState.chartState[dataType].aggregation = e.target.value;
            rerenderAggregateChart(dataType);
        });
    });
}

function populateBatteriesFilter(dataType) {
    const containerIds = {
        oil: 'oilChartBatteries',
        water: 'waterChartBatteries',
        gas: 'gasChartBatteries'
    };

    const container = document.getElementById(containerIds[dataType]);
    if (!container) return;

    container.innerHTML = '';

    if (!hasUploadedData()) {
        container.innerHTML = '<div class="explorer-empty">No data uploaded</div>';
        return;
    }

    const updateToggleLabel = () => {
        const toggleBtnIds = {
            oil: 'btnToggleAllOil',
            water: 'btnToggleAllWater',
            gas: 'btnToggleAllGas'
        };
        const toggleBtn = document.getElementById(toggleBtnIds[dataType]);
        if (!toggleBtn) return;

        const batteryCheckboxes = container.querySelectorAll('.battery-checkbox');
        if (!batteryCheckboxes.length) return;
        const allChecked = Array.from(batteryCheckboxes).every(cb => cb.checked);
        toggleBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
    };

    const selectedBatteries = appState.chartState[dataType]?.selectedBatteries || null;

    GAUGE_SHEETS.forEach(sheetConfig => {
        const sheetData = appState.appData[sheetConfig.id];
        if (!sheetData) return;

        // Check if battery has metadata (sheet has been loaded)
        if (!sheetData._metadataLoaded) return;

        const isSelected = !selectedBatteries || selectedBatteries.has(sheetConfig.id);
        
        // Get well count from cache or from loaded data
        const wellCount = appState.metadataCache.wellCounts[sheetConfig.id] || 
                         (sheetData.wells ? sheetData.wells.length : 0);

        const batteryItem = document.createElement('label');
        batteryItem.className = 'explorer-battery-simple explorer-checkbox';
        batteryItem.innerHTML = `
            <input type="checkbox" class="battery-checkbox" data-battery="${sheetConfig.id}" ${isSelected ? 'checked' : ''}>
            <span class="checkmark"></span>
            <span class="battery-name">${sheetConfig.name}</span>
            <span class="battery-well-count">${wellCount} wells</span>
        `;
        container.appendChild(batteryItem);

        const batteryCheckbox = batteryItem.querySelector('.battery-checkbox');
        batteryCheckbox.addEventListener('change', () => {
            rerenderAggregateChart(dataType);
            updateToggleLabel();
        });
    });

    const toggleBtnIds = {
        oil: 'btnToggleAllOil',
        water: 'btnToggleAllWater',
        gas: 'btnToggleAllGas'
    };

    const toggleBtn = document.getElementById(toggleBtnIds[dataType]);
    if (toggleBtn) {
        const newToggleBtn = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);

        newToggleBtn.addEventListener('click', () => {
            const batteryCheckboxes = container.querySelectorAll('.battery-checkbox');
            const allChecked = Array.from(batteryCheckboxes).every(cb => cb.checked);

            batteryCheckboxes.forEach(cb => {
                cb.checked = !allChecked;
            });

            newToggleBtn.textContent = allChecked ? 'Select All' : 'Deselect All';
            rerenderAggregateChart(dataType);
        });

        updateToggleLabel();
    }
}

