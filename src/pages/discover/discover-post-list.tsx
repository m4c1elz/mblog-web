import { Post } from "../../components/post"
import { useAuth } from "../../providers/auth-provider"
import { Post as PostType } from "../../types/post"

interface DiscoverPostListProps {
    postList: PostType[]
}

export function DiscoverPostList({ postList }: DiscoverPostListProps) {
    const { user } = useAuth()

    return (
        <>
            {postList.map(post => (
                <Post.Root id={post.id} key={post.id}>
                    <Post.Header>
                        <Post.User atsign={post.atsign}>{post.name}</Post.User>
                        <Post.Date isEdited={post.updatedAt ? true : false}>
                            {post.createdAt}
                        </Post.Date>
                    </Post.Header>
                    <Post.Content>{post.post}</Post.Content>
                    <Post.Footer>
                        <Post.Stats>
                            <Post.Likes>{post.likes}</Post.Likes>
                            <Post.Comments>{post.comments}</Post.Comments>
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
