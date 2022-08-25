import { useEffect } from "react"
import { useDispatch } from "react-redux"
import PostList from "../components/PostList"
import { fetchAllPost } from "../redux/posts"

const PostsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllPost())
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>
            <PostList />
        </div>
    )
}

export default PostsPage