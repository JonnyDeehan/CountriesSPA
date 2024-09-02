import React from 'react';
import './App.css';
import { CountriesSearchContainer } from '../components/CountriesSearchContainer/CountriesSearchContainer';
import { ToastContainer } from 'react-toastify';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavouritesGrid } from '../components/FavouritesGrid/FavouritesGrid';


function App() {
  return (
    <Router>
      <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<CountriesSearchContainer />} />
              <Route path="/favourites" element={<FavouritesGrid />} />
            </Routes>
          </div>
        </div>
      <ToastContainer 
        position="top-right" // Ensure proper position is set here as well
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
