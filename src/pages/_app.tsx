import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'

import { AuthContextProvider } from '../contexts/AuthContext';
import { MoviesContextProvider } from '../contexts/MovieContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <MoviesContextProvider>
          <Component {...pageProps} />
        </MoviesContextProvider>
      </AuthContextProvider>
    </>
  )
}
export default MyApp
