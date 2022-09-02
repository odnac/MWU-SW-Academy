import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppShell, CoProvider } from '@co-design/core'
import type { AppProps } from 'next/app'
import { Header } from '../components'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  const header = <AppShell.Header height={70}>
    <Header />
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

export default MyApp
