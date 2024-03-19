import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './components/LazySuspense';
const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyRegister = lazy(()=>import("./pages/Auth/Register"))
import './App.css'

function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/EZpay/Login" />} />
        <Route path="/EZpay/Login" element={<LazySuspense component ={LazyLogin} />} />
        <Route path="/EZpay/register" element={<LazySuspense component ={LazyRegister} />} />

      </Routes>
  );
}

export default App;
