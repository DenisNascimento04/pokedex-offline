import React from 'react';
import './App.css';
import { Larning } from './Larning';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Larning/>
    </QueryClientProvider>
  );
}

export default App;
