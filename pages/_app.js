import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Context
import QuioscoProvider from 'context/QuioscoProvider'
// Styles
import '../styles/globals.css'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <QuioscoProvider>
        <Component {...pageProps} />
      </QuioscoProvider>
    </QueryClientProvider>
  )
}

export default MyApp
