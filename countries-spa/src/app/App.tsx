import React from 'react';
import './App.css';
import { CountriesSearchContainer } from '../components/CountriesSearchContainer/CountriesSearchContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { FavouritesGrid } from '../components/FavouritesGrid/FavouritesGrid';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '../store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>

      <Router basename={process.env.PUBLIC_URL}>
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
          position="top-right"
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
      </Provider>
  );
};

export default App;
