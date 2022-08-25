import { useSelector } from "react-redux"
import { RootState } from "../../redux"
import PostItem from "../PostItem"
import Spinner from "../Spinner"

const PostList = () => {
    const { data, loading } = useSelector((store: RootState) => store.posts)

    return (
        <div>
            {loading ? <Spinner/> : 
            <ul>
                {data.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </ul>}
        </div>
    )
}

export default PostList