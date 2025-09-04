import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/student/Home'
import Create from './components/student/Create';
import Read from './components/student/Read';
import Update from './components/student/Update';
import Login from "./components/auth/login";
import Register from "./components/auth/register"

import ProtectedRoute from './components/auth/protectedRoute';
import MainLayout from './components/layout/MainLayout';
import PublicRoute from './components/auth/publicRoute';

function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <PublicRoute> <Login /> </PublicRoute> } />
          <Route path='/register' element={ <PublicRoute> <Register /> </PublicRoute> }  />

          {/* Protected routes */}
          <Route element={<MainLayout /> }>
            <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path='/create' element={ <ProtectedRoute> <Create /> </ProtectedRoute> }/>
            <Route path='/student/:id' element={ <ProtectedRoute> <Read /> </ProtectedRoute> } />
            <Route path='/edit/:id' element={ <ProtectedRoute> <Update /> </ProtectedRoute>  } />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
