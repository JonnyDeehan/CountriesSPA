import React from 'react';
import './App.css';
import { CountriesSearchContainer } from '../components/CountriesSearchContainer/CountriesSearchContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesSearchContainer />
    </QueryClientProvider>
  );
}

export default App;
