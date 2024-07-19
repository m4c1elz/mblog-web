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
                        <Post.Likes>{post.likes}</Post.Likes>
                        <Post.Comments>{post.comments}</Post.Comments>
                        {user?.atsign === post.atsign && (
                            <Post.EditButton defaultValue={post.post} />
                        )}
                    </Post.Footer>
                </Post.Root>
            ))}
        </>
    )
}
