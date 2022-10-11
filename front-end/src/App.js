import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <section>
      <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/products" element={ <Products /> } />
      </Routes>
    </section>
  );
}

export default App;
