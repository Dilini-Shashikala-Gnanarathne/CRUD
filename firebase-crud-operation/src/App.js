import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About'; // Corrected the import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/about" element={<About />} /> {/* Corrected the path to lowercase */}
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
