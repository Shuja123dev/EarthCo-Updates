import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import EstimatePage from './pages/EstimatePage';
import ServiceRequestsPage from './pages/ServiceRequestsPage';
import ServiceRequestPage from './pages/ServiceRequestPage';
import IrrigationPage from './pages/IrrigationPage';
import IrrigationForm from './components/Irrigation/IrrigationForm';

import AddEstimatePage from './pages/AddEstimatePage';
import Audit from './components/Reports/Audit';
import LandscapeForm from './components/Landscape/Form';
import Landscape from './components/Landscape/Landscape';
import Landscapelist from './components/Landscape/Landscapelist';
import SummaryReport from './components/Reports/SummaryReport';
import ProposalSummary from './components/Reports/ProposalSummary';
import WeeklyReport from './components/Reports/WeeklyReport';
import DataFun from './context/AppData';
import CustomersPage from './pages/CustomersPage';
import { RoutingContext } from './context/RoutesContext';
import OpenEstPage from './pages/OpenEstPage';
import PunchlistPage from './pages/PunchlistPage';
import PunchlistPreview from './components/PunchLists/PunchlistPreview';
import WeeklyReportlist from './components/Reports/WeeklyReport/WeeklyReportlist';
import AddWRform from './components/Reports/WeeklyReport/AddWRform';
import AddCustomerPage from './pages/AddCustomerPage';
// import '../public/assets/vendor/global/global.min.js'

// import '../public/assets/css/'; 
// import './public/css/bootstrap-select.min.css'; 
// import './public/css/custom.css';
//basename={process.env.PUBLIC_URL}

function App() {

  const { estimateRoute, SRroute } = useContext(RoutingContext);

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/Dashboard' element={
          <DataFun>
            <DashboardPage />
          </DataFun>
        } />
        <Route path='/Employees' element={<EmployeesPage />} />
        <Route path='/Estimates' element={
          <DataFun>
            <EstimatePage />
          </DataFun>
        } />
        <Route path='/service-requests' element={
          <DataFun>
            <ServiceRequestsPage />
          </DataFun>
        } />
        <Route path={`/service-requests/${SRroute}`} element={
          <DataFun>
            <ServiceRequestPage />
          </DataFun>
        } />
        <Route path='/Audit' element={<Audit />} />
        <Route path='/LandscapeForm' element={<LandscapeForm />} />
        <Route path='/Landscapelist' element={<Landscapelist />} />
        <Route path='/Landscape' element={<Landscape />} />
        <Route path='/SummaryReport' element={<SummaryReport />} />
        <Route path='/ProposalSummary' element={<ProposalSummary />} />
        <Route path='/WeeklyReport' element={<WeeklyReport />} />
        <Route path='/IrrigationForm' element={<IrrigationForm />} />
        <Route path='/Irrigation-form' element={<IrrigationPage />} />
        <Route path='/add-estimate' element={<AddEstimatePage />} />
        <Route path='/Customers' element={
          <DataFun>
            <CustomersPage />
          </DataFun>
        } />
        <Route path={`/Estimates/${estimateRoute}`} element={
          <DataFun>
            <OpenEstPage />
          </DataFun>
        } />
        <Route path='/Punchlist' element={<PunchlistPage />} />
        <Route path='/PunchlistPreview' element={<PunchlistPreview />} />
        <Route path='/Weekly-Reports' element={
          <DataFun>
            <WeeklyReportlist />
          </DataFun>
        } />
        <Route path='/Add-Weekly-Report' element={
          <DataFun>
            <AddWRform />
          </DataFun>
        } />
        <Route path='/Add-Customer' element={
          <DataFun>
            <AddCustomerPage />
          </DataFun>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
