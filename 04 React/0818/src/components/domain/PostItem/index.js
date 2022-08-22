import { useCallback, useState } from "react"
import { usePostContext } from "../../../contexts/PostProvider"
import  Header  from "../../Header"
import Spinner from "../../Spinner"
import  Text  from "../../Text/Text"

const PostItem = ({ post }) => {
    const [loading, setLoading] = useState(false)
    const { onDeletePost } = usePostContext()

    const handleDeletePost = useCallback(async (id) => {
        setLoading(true)
        await onDeletePost(id)
        setLoading(false)
    }, [onDeletePost])

    return (
        <li>
            <Header strong level={3}>
                {post.title}
            </Header>
            <Text>{post.body}</Text>
            <div>
                {loading ? <Spinner/> : <button onClick={() => handleDeletePost(post.id)}>Delete</button>}
            </div>
        </li>
    )
}

export default PostItem