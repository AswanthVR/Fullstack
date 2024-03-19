import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './components/LazySuspense';
const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const LazyDashboard = lazy(()=>import("./pages/Admin/Dashboard"))
const LazyRegister = lazy(()=>import("./pages/Auth/Register"))
import './App.css'
const UserRoutes =()=> (
  <LazyUserLayout>
    <Routes>
      <Route path='/home' element={<LazySuspense component={LazyHome}/>}/>
    </Routes>
  </LazyUserLayout>
)

const AdminRoutes =()=> (
  <LazyAdminLayout>
    <Routes>
      <Route path='/dashboard' element={<LazySuspense component={LazyDashboard}/>}/>
    </Routes>
  </LazyAdminLayout>
)

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/EZpay/Login" />} />
        <Route path="/EZpay/Login" element={<LazySuspense component ={LazyLogin} />} />
        <Route path="/EZpay/register" element={<LazySuspense component ={LazyRegister} />} />
        <Route path="/EZpay/user/*" element={<LazySuspense component ={UserRoutes} />} />
        <Route path = "/EZpay/admin/*" element={<LazySuspense component ={AdminRoutes} />} />
      </Routes>
  );
}

export default App;
