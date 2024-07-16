import { Post } from "../../components/post"
import { DiscoverLayout } from "./layout"
import { Loading } from "../../components/loading"
import { useGetPosts } from "../../hooks/use-get-posts"

export function Discover() {
    let page = 1

    const { data: posts, isPending, isError, error } = useGetPosts({ page })

    if (isError) {
        console.log(error)
        return (
            <DiscoverLayout>
                <div className="grid flex-1 place-items-center">
                    <h1 className="text-red-500">
                        Houve um erro ao pegar os dados!
                    </h1>
                </div>
            </DiscoverLayout>
        )
    }

    if (isPending)
        return (
            <DiscoverLayout>
                <Loading />
            </DiscoverLayout>
        )

    if (posts)
        return (
            <DiscoverLayout>
                <div className="flex-1">
                    <div className="mt-6 h-screen overflow-auto md:mt-0">
                        {posts.map(post => (
                            <Post.Root id={post.id} key={post.id}>
                                <Post.Header>
                                    <Post.User atsign={post.atsign}>
                                        {post.name}
                                    </Post.User>
                                    <Post.Date>{post.createdAt}</Post.Date>
                                </Post.Header>
                                <Post.Content>{post.post}</Post.Content>
                                <Post.Footer>
                                    <Post.Likes>{post.likes}</Post.Likes>
                                    <Post.Comments>
                                        {post.comments}
                                    </Post.Comments>
                                </Post.Footer>
                            </Post.Root>
                        ))}
                    </div>
                </div>
            </DiscoverLayout>
        )
}
