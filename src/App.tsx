import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PageLayout from './components/layout/PageLayout';
import Header from './components/layout/Header';

const queryClient = new QueryClient();
const App: React.FC = () => {

  const [createArticle, setcreateArticle] = React.useState(false)
  return (
    <>
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools />
      <Header setcreateArticle={setcreateArticle} />
      <PageLayout createArticle={createArticle} setcreateArticle={setcreateArticle} />
    </QueryClientProvider>
    </>
  )
}

export default App
