import './App.css';
import React from 'react';
// import HeaderLoged from './components/HeaderLoged';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <section>
      <Routes>
        <Route
          exact
          path="/"
          render={ () => (
            <Navigate to="/home" />
          ) }
        />
      <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </section>
  );
}

export default App;
