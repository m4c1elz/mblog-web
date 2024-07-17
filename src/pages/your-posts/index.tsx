import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { YourPostsLayout } from "./layout"
import { Post } from "../../components/post"
import { Loading } from "../../components/loading"
import { useGetUserPosts } from "../../hooks/use-get-user-posts"

export function YourPosts() {
    const { user } = useAuth() as { user: NonNullable<ReturnedUserType> }

    const { data: posts, isPending } = useGetUserPosts({ userId: user.id })

    if (isPending)
        return (
            <YourPostsLayout>
                <Loading />
            </YourPostsLayout>
        )

    if (posts)
        return (
            <YourPostsLayout>
                <div className="flex-1">
                    <div className="mt-6 h-screen overflow-auto md:mt-0">
                        <h1 className="py-4 text-center text-2xl font-medium">
                            Suas postagens
                        </h1>
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
            </YourPostsLayout>
        )
}
