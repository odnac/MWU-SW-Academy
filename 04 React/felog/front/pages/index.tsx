import { gql, useQuery } from "@apollo/client"
import { Anchor, Card, Center, Container, Divider, EquallyGrid, Heading, Spinner, Text } from "@co-design/core"
import NextLink from 'next/link'

const GET_POSTS = gql`
  query GetPosts {
    post {
      data {
        id
        attributes {
          title
          body
          createdAt
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(GET_POSTS)

  return (
    <Container padding={16} co={{ marginTop: 16 }}>
      {
        loading ? <Center><Spinner/></Center> : (
        <EquallyGrid cols={4}>
          {data.posts.data.map((post: any) => (
              <Card key={post.id}>
                <NextLink href="/posts/[id]" as={`/posts/${post.id}`} passHref>
                  <Anchor co={{ textDecoration: "none", color: "black" }}>
                    <Heading level={4}>{post.attributes.title}</Heading>
                  </Anchor>
                </NextLink>
                <Text lineClamp={3}>{post.attributes.body}</Text>
                <Divider />
                <Text block align="right">{post.attributes.user.data.attributes.username}</Text>
              </Card>
            ))}
        </EquallyGrid>
      )}
    </Container>
  )
}

export default Home
