import { Post } from "../../components/post"
import { Post as PostType } from "../../types/post"

interface DiscoverPostListProps {
    postList: PostType[]
}

export function DiscoverPostList({ postList }: DiscoverPostListProps) {
    return (
        <>
            {postList.map(post => (
                <Post.Root id={post.id} key={post.id}>
                    <Post.Header>
                        <Post.User atsign={post.atsign}>{post.name}</Post.User>
                        <Post.Date>{post.createdAt}</Post.Date>
                    </Post.Header>
                    <Post.Content>{post.post}</Post.Content>
                    <Post.Footer>
                        <Post.Likes>{post.likes}</Post.Likes>
                        <Post.Comments>{post.comments}</Post.Comments>
                    </Post.Footer>
                </Post.Root>
            ))}
        </>
    )
}
