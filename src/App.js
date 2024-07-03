// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/Header';
import Navbar from './components/reusable/NavBar/Navbar';
import Orders from './pages/Orders';


const App = () => (
  // <div  className='main' style={{width: '100%'}}>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </Router>
  
);

export default App;
