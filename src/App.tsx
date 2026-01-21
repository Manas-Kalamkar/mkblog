import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PageLayout from './components/layout/PageLayout';

const queryClient = new QueryClient();
const App: React.FC = () => {

  return (
    <>
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools />
      <PageLayout />
    </QueryClientProvider>
    </>
  )
}

export default App
