import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import MainLayout from './components/layout/MainLayout';
import WelcomeView from './components/dashboard/WelcomeView';
import GaugeSheetView from './components/gaugesheet/GaugeSheetView';
import WellDetailView from './components/well/WellDetailView';
import BatteryView from './components/battery/BatteryView';
import AggregateOilChart from './components/charts/AggregateOilChart';
import AggregateWaterChart from './components/charts/AggregateWaterChart';
import AggregateGasChart from './components/charts/AggregateGasChart';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/sheet/:sheetId" element={<GaugeSheetView />} />
          <Route path="/well/:sheetId/:wellId" element={<WellDetailView />} />
          <Route path="/battery/:sheetId" element={<BatteryView />} />
          <Route path="/charts/oil" element={<AggregateOilChart />} />
          <Route path="/charts/water" element={<AggregateWaterChart />} />
          <Route path="/charts/gas" element={<AggregateGasChart />} />
        </Routes>
      </MainLayout>
    </AppProvider>
  );
}

export default App;
