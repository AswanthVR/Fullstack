import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './components/LazySuspense';
const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const LazyDashboard = lazy(()=>import("./pages/Admin/Dashboard"))
const LazyRegister = lazy(()=>import("./pages/Auth/Register"))
const LazyPrepaid = lazy(()=>import("./pages/user/Prepaid"))
const LazyPostpaid = lazy(()=>import("./pages/user/Postpaid"))
const LazyPlans = lazy(()=>import("./pages/user/Plans"))
const LazyPayment = lazy(()=>import("./pages/user/Payment"))
const LazyFaq = lazy(()=>import("./pages/user/FAQ/Faq"))
const LazyAbout = lazy(()=>import("./pages/user/AboutUs"))



const LazyUserManagement = lazy(()=>import("./pages/Admin/UserDetails"))
import './App.css'
import ScrollToTop from './ScrollToTop';
import RazorpayComponent from './components/Payment/Payment';
const UserRoutes =()=> (
  <LazyUserLayout>
    <Routes>
      <Route path='/home' element={<LazySuspense component={LazyHome}/>}/>
      <Route path='/prepaid' element={<LazySuspense component={LazyPrepaid}/>}/>
      <Route path='/postpaid' element={<LazySuspense component={LazyPostpaid}/>}/>
      <Route path='/prepaid/plans' element={<LazySuspense component={LazyPlans}/>}/>
      {/* <Route path='/prepaid/plans' element={<LazySuspense component={LazyPlans}/>}/> */}
      <Route path='/payment' element={<LazySuspense component={LazyPayment}/>}/>
      <Route path='/faq' element={<LazySuspense component={LazyFaq}/>}/>
      <Route path='/about' element={<LazySuspense component={LazyAbout}/>}/>
    </Routes>
  </LazyUserLayout>
)

const AdminRoutes =()=> (
  <LazyAdminLayout>
    <Routes>
      <Route path='/dashboard' element={<LazySuspense component={LazyDashboard}/>}/>
      <Route path='/user-management' element={<LazySuspense component={LazyUserManagement  }/>}/>
    </Routes>
  </LazyAdminLayout>
)

function App() {
  return ( 
    <>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/EZpay/Login" />} />
        <Route path="/EZpay/Login" element={<LazySuspense component ={LazyLogin} />} />
        <Route path="/EZpay/register" element={<LazySuspense component ={LazyRegister} />} />
        <Route path="/EZpay/user/*" element={<LazySuspense component ={UserRoutes} />} />
        <Route path = "/EZpay/admin/*" element={<LazySuspense component ={AdminRoutes} />} /> 
        <Route path = "/EZpay" element={<RazorpayComponent />} /> 
      </Routes>
    </>
  );
}

export default App;
