import axios from "axios"
import Link from "next/link"
import { Post } from "../interfaces"

export const getServerSideProps = async () => {
  const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return {
    props: { posts },
  }
}

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <div>
      Home
        <ul>
          {posts.map((post) => (
            <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id} passHref>
              <a>
                <li>{post.title}</li>
              </a>
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default HomePage