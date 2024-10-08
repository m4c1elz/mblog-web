import { LoaderCircle } from "lucide-react"
import { Post } from "../../components/post"
import { useAuth } from "../../providers/auth-provider"

export interface PostType {
    id: number
    name: string
    atsign: string
    post: string
    likes: number
    comments: number
    createdAt: string
    updatedAt: string | null
}

type UserPostListProps = {
    userPosts: PostType[] | undefined
}

export function UserPostList({ userPosts }: UserPostListProps) {
    const { user } = useAuth()

    if (!userPosts)
        // then it's loading
        return (
            <LoaderCircle
                size={30}
                className="m-auto animate-spin text-accent"
            />
        )
    if (userPosts.length === 0) {
        return (
            <h1 className="text-center font-medium">
                Não há postagens para ver.
            </h1>
        )
    } else {
        return (
            <>
                {userPosts.map(post => (
                    <Post.Root id={post.id} key={post.id}>
                        <Post.Header>
                            <Post.User atsign={post.atsign}>
                                {post.name}
                            </Post.User>
                            <Post.Date isEdited={post.updatedAt !== undefined}>
                                {post.createdAt}
                            </Post.Date>
                        </Post.Header>
                        <Post.Content>{post.post}</Post.Content>
                        <Post.Footer>
                            <Post.Stats>
                                <Post.Likes>{post.likes}</Post.Likes>
                            </Post.Stats>
                            {user?.atsign === post.atsign && (
                                <Post.Buttons>
                                    <Post.EditButton defaultValue={post.post} />
                                    <Post.DeleteButton />
                                </Post.Buttons>
                            )}
                        </Post.Footer>
                    </Post.Root>
                ))}
            </>
        )
    }
}
