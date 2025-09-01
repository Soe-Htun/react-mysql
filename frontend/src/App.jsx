import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/student/:id' element={ <Read /> } />
          <Route path='/edit/:id' element={ <Update /> } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
