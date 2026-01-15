export const GAUGE_SHEETS = [
    { id: 'cowden', name: 'Cowden', fileName: 'Cowden Gauge Sheet1.xlsx', parser: 'CowdenParser' },
    { id: 'bigmax', name: 'Big Max', fileName: 'Big Max Gauge Sheet.xlsx', parser: 'BigMaxParser' },
    { id: 'bigmax1h', name: 'Big Max 1H', fileName: 'Big Max 1H Gauge Sheet.xlsx', parser: 'BigMax1HParser' },
    { id: 'southandrews', name: 'South Andrews', fileName: 'South Andrews Gauge Sheet.xlsm', parser: 'SouthAndrewsParser' },
    { id: 'polaris', name: 'Polaris', fileName: 'Polaris Gauge Sheet.xlsx', parser: 'PolarisParser' },
    { id: 'shusa', name: 'Shusa', fileName: 'Shusa Gauge Sheet.xlsx', parser: 'ShusaParser' },
    { id: 'mwwemac', name: 'MW-Wemac-Sabrina-Berkley', fileName: 'Mw-Wemac-Sabrina-Berkley.xlsx', parser: 'MWWemacParser' },
    { id: 'unit130', name: '1-30 Unit 1H', fileName: '1-30 Unit 1H Gauge Sheet.xlsx', parser: 'Unit130Parser' },
    { id: 'uls35h', name: 'ULS 3-5H', fileName: 'ULS 3-5H Gauge Sheet.xlsx', parser: 'ULS35HParser' }
];

export const STORAGE_KEY = 'oilWellData';
export const THEME_STORAGE_KEY = 'oilWellTheme';

export const appState = {
    appData: {},
    currentSheet: null,
    currentWell: null,
    wellProductionCharts: {},
    batteryProductionChart: null,
    currentWellData: null,
    productionDateRange: { min: null, max: null },
    chartState: {
        oil: { aggregation: 'month', selectedWells: null },
        water: { aggregation: 'month', selectedWells: null },
        gas: { aggregation: 'month', selectedWells: null }
    },
    aggregateOilChart: null,
    aggregateWaterChart: null,
    aggregateGasChart: null,
    oilChartDateRange: { min: null, max: null },
    waterChartDateRange: { min: null, max: null },
    gasChartDateRange: { min: null, max: null },
    pressureCharts: { psi: null, injVol: null },
    currentEditSection: null,
    // Progressive loading state
    isLoading: false,
    loadedSheets: [],
    loadedWells: {},
    // Metadata cache for quick navigation updates
    metadataCache: {
        wellCounts: {},  // { sheetId: count }
        wellNames: {}    // { sheetId: [{ id, name }] }
    }
};
