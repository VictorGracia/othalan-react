import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home';
import RegistreProductoPage from './pages/registreProducto';
import ListadoProductosPage from './pages/listadoProductos';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="" element={<HomePage />} index />
      <Route path="/nuevo-producto" element={<RegistreProductoPage />} index />
      <Route path="/mis-productos" element={<ListadoProductosPage />} index />
    </Routes>
  </Router>
  );
}

export default App;
