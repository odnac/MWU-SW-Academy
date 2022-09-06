import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppShell, CoProvider } from '@co-design/core'
import type { AppContext, AppProps } from 'next/app'
import { Header } from '../components'
import nookies from 'nookies'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  const header = <AppShell.Header height={70}>
    <Header token={pageProps.token}/>
  </AppShell.Header>

  return (
    <ApolloProvider client={client}>
      <CoProvider withNormalizeCSS withGlobalStyles>
        <AppShell fixed header={header}>
          <Component {...pageProps} />
        </AppShell>
      </CoProvider>
    </ApolloProvider>
  )
}

MyApp.getInitailProps = async (appCtx: AppContext) => {
  const { token } = nookies.get(appCtx.ctx)
  return { pageProps: { token } }
}

export default MyApp