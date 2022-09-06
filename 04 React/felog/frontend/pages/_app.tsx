import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import type { AppContext, AppProps } from 'next/app'
import { AppShell, CoProvider } from '@co-design/core'
import { Header } from '../components'
import { setContext } from '@apollo/client/link/context'
import nookies from 'nookies'

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql',
})

const authLink = setContext((_, { headers }) => {
  const { token } = nookies.get()

  return {
    headers: {
      ...headers,
      Authorizaion: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  //uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  const header = 
    <AppShell.Header height={70}>
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
