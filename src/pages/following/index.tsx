import { Loading } from "../../components/loading"
import { Post } from "../../components/post"
import { useGetFollowingPosts } from "../../hooks/use-get-following-posts"
import { useAuth } from "../../providers/auth-provider"
import { FollowingLayout } from "./layout"

export function Following() {
    const { user } = useAuth()
    const { data: posts, isPending } = useGetFollowingPosts({
        userId: user!.id,
    })

    if (isPending)
        return (
            <FollowingLayout>
                <Loading />
            </FollowingLayout>
        )

    if (posts)
        return (
            <FollowingLayout>
                <div className="flex-1">
                    <h1 className="mt-4 text-center text-2xl font-medium">
                        Seguindo
                    </h1>
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
            </FollowingLayout>
        )
}
