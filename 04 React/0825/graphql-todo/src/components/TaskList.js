import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { Task } from "./Task"

const UnorderedList = styled.ul`
    width: 400px;
    margin: 0;
    margin-top: 16px;
    padding: 0;

    & > li {
        &:not(:first-of-type) {
            margin-top: 8px;
        }
    }
`

const GET_TASKS = gql`
    query GetTasks {
        tasks {
            data {
                id
                attributes{
                    content
                    complete
                }
            }
        }
    }
`

export const TaskList = () => {
    const { data, loading, error } = useQuery(GET_TASKS)

    if(loading) return 'Loading...'
    if(error) return 'Error!'

    return (
        <UnorderedList>
            {
                data.tasks.data.map(task => {
                    return (
                        <Task key={task.id} id={task.id} content={task.attributes.content} complete={task.attributes.complete} />
                    )
                })
            }
        </UnorderedList>
    )
}