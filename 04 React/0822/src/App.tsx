import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

const App = () => {
  return (
    <div>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList />
      </Container>
      
    </div>
  );
}

export default App;
