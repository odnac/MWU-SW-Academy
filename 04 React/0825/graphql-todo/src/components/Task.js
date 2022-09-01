import styled from "@emotion/styled"
import { gql, useApolloClient, useMutation,  } from "@apollo/client"
import { Toggle } from "./Toggle"

const ListItem = styled.li`
    display: flex;
    width: 400px;
    height: 40px;
    align-items: center;
    padding: 0 8px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    list-style: none;
    box-sizing: border-box;
`

const Content = styled.span`
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
    text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`

const RemoveButton = styled.button`
    width: 60px;
    height: 24px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    border: none;
    background-color: red;
    cursor: pointer;
`

const DELETE_TASK = gql`
    mutation DeleteTask($id: ID!) {
        deleteTask(id: $id) {
            data {
                id
            }
        }
    }
`
const UPDATE_TASK = gql`
    mutation UpdateTask($id: ID!, $complete: Boolean!) {
        updateTask(id: $id, data: { complete: $complete }) {
            data {
                id
            }
        }
    }
`

export const Task = ({ id, content, complete }) => {
    const client = useApolloClient()
    const [updateTask] = useMutation(UPDATE_TASK)
    const [deleteTask] = useMutation(DELETE_TASK)

    return (
        <ListItem>
            <Toggle 
                on={complete} 
                onChange={(e) => {
                    updateTask({ variables: { id, complete: e.target.checked }  
                })
                client.refetchQueries({ include: ["GetTasks"]})
            }} />
            <Content complete={complete}>{content}</Content>
            <RemoveButton 
                onClick={() => {
                    deleteTask({ variables: {id}}) 
                    client.refetchQueries({ include: ["GetTasks"]})
                }}>
                    Remove
            </RemoveButton>
        </ListItem>
    )
}