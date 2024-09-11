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
            {postList.map(
                ({
                    id,
                    name,
                    atsign,
                    createdAt,
                    updatedAt,
                    post,
                    comments,
                    likes,
                }) => (
                    <>
                        <Post.Root id={id} key={id}>
                            <Post.Header>
                                <Post.User atsign={atsign}>{name}</Post.User>
                                <Post.Date isEdited={updatedAt ? true : false}>
                                    {createdAt}
                                </Post.Date>
                            </Post.Header>
                            <Post.Content>{post}</Post.Content>
                            <Post.Footer>
                                <Post.Stats>
                                    <Post.Likes>{likes}</Post.Likes>
                                    <Post.Comments>{comments}</Post.Comments>
                                </Post.Stats>
                                {user?.atsign === atsign && (
                                    <Post.Buttons>
                                        <Post.EditButton defaultValue={post} />
                                        <Post.DeleteButton />
                                    </Post.Buttons>
                                )}
                            </Post.Footer>
                        </Post.Root>
                    </>
                ),
            )}
        </>
    )
}
