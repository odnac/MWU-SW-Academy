import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { usePostContext } from "../../../contexts/PostProvider"
import  Header  from "../../Header"
import Spinner from "../../Spinner"

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
            <Link to={`/posts/${post.id}`}>Detail--</Link>
            <div>
                {loading ? <Spinner/> : <button onClick={() => handleDeletePost(post.id)}>Delete</button>}
            </div>
        </li>
    )
}

export default PostItem