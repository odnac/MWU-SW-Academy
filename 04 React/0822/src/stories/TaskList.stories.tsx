import TaskList from "../components/TaskList";
//import TaskProvider from "../contexts/TaskProvider";

export default {
    title: 'Component/TaskList',
    component: TaskList
}

export const Default = () => {
    const tasks = [
        {
            id: '123',
            content: "Todo",
            complete: false,
        },
        {
            id: '124',
            content: "Todo2",
            complete: true,
        },
    ]

    return (
        //<TaskProvider initialTasks={tasks}>
            <TaskList />
        //</TaskProvider>
    )
}