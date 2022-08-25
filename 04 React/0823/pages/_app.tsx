import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getinitialProps = () => {
  return {
    pageProps: {
      test: 100
    }
  }
}

export default MyApp
