import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'
import { Home } from './views/Home/Home';
import Page from './views/Page/Page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Home /> */}
      <Page />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
