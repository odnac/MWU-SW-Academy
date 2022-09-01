import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import styled from "@emotion/styled"
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

const client = new ApolloClient ({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList/>
      </Container>
    </ApolloProvider>
  );
}

export default App;
