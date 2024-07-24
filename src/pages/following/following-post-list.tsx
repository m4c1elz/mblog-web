import { Post } from "../../components/post"
import { Post as PostType } from "../../types/post"

interface FollowingPostListProps {
    postList: PostType[]
}

export function FollowingPostList({ postList }: FollowingPostListProps) {
    if (postList.length > 0) {
        return (
            <>
                {postList.map(post => (
                    <Post.Root id={post.id} key={post.id}>
                        <Post.Header>
                            <Post.User atsign={post.atsign}>
                                {post.name}
                            </Post.User>
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
                        </Post.Footer>
                    </Post.Root>
                ))}
            </>
        )
    } else {
        return (
            <div className="m-auto mt-6 text-center">
                <h1 className="text-xl font-bold">Não há postagens.</h1>
                <p className="m-auto max-w-80 text-lg md:max-w-max">
                    Espere um pouco. Depois de um tempo, seus usuários favoritos
                    devem postar!
                </p>
            </div>
        )
    }
}
