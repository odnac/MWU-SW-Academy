import axios from "axios"
import { Fragment } from "react"
import { useParams } from "react-router"
import Header from "../components/Header"
import Spinner from "../components/Spinner"
import useAsync from "../hooks/useAsync"
import Text from "../components/Text/Text"

const PostPage = () => {
    const { postId } = useParams()

    const post = useAsync(async () => {
        return await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((respones) => respones.data)
    }, [postId])

    return (
        <div>
            {post.isLoading ? <Spinner /> : (
                <Fragment>
                    <Header strong>{post.value?.title}</Header>
                    <Text>{post.value?.body}</Text>
                </Fragment>
            )}
        </div>
    )
}

export default PostPage