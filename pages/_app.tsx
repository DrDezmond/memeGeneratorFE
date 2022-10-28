import { StoreProvider } from '@store/Provider'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
