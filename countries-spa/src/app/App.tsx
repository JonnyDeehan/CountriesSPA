import React from 'react';
import './App.css';
import { CountriesSearchContainer } from '../components/CountriesSearchContainer/CountriesSearchContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesSearchContainer />
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
    </QueryClientProvider>
  );
}

export default App;
