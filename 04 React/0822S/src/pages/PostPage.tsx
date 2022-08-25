import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import { RootState } from "../redux"
import { fetchPostById } from "../redux/posts"

const Postpage = () => {
    const { postId } = useParams<{ postId: string}>()
    const dispatch = useDispatch()
    const post = useSelector((state: RootState) => {
        return state.posts.data.find(post => post.id === parseInt(postId))
    })

    useEffect(() => {
        dispatch(fetchPostById(parseInt(postId)))
    }, [dispatch])

    return (
        <div>
            {
                post ? (
                    <Fragment>
                        <h1>{post.title}</h1>
                        <span>{post.body}</span>
                    </Fragment>
                ) :  (
                    <Spinner />
                )
            }
        </div>
    )
}

export default Postpage