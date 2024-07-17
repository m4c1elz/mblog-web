import { Link, useParams } from "react-router-dom"
import { PostPageLayout } from "./layout"
import { Loading } from "../../components/loading"
import { dayjs } from "../../lib/dayjs"
import { SinglePost } from "../../components/single-post"
import { useGetPost } from "../../hooks/use-get-post"

export function PostPage() {
    const { id } = useParams()

    const { data: post, isPending } = useGetPost({ postId: id! })

    if (isPending)
        return (
            <PostPageLayout>
                <Loading />
            </PostPageLayout>
        )

    if (post) {
        const {
            id,
            username,
            atsign,
            post: postContent,
            likes,
            commentCount,
            createdAt,
            comments,
        } = post

        return (
            <PostPageLayout>
                <main className="mx-auto my-4 h-screen w-full overflow-auto">
                    <SinglePost.Root>
                        <SinglePost.Header>
                            <SinglePost.User atsign={atsign}>
                                {username}
                            </SinglePost.User>
                            <SinglePost.Date>{createdAt}</SinglePost.Date>
                        </SinglePost.Header>
                        <SinglePost.Content>{postContent}</SinglePost.Content>
                        <SinglePost.Footer
                            id={id.toString()}
                            likes={likes}
                            commentCount={commentCount}
                        />
                    </SinglePost.Root>
                    {comments.map(comment => (
                        <div
                            key={comment.comment}
                            className="m-auto mt-6 w-96 space-y-2 border border-black/20 bg-primary px-4 py-2 md:w-[500px] lg:w-[700px]"
                        >
                            <section className="flex w-full items-center justify-between">
                                <Link
                                    to={`/users/${comment.user}`}
                                    className="flex items-center gap-1"
                                >
                                    <div className="aspect-square h-8 rounded-full bg-slate-400"></div>
                                    <p className="font-base">@{comment.user}</p>
                                </Link>
                                <p className="text-sm text-black/40">
                                    {dayjs(
                                        comment.createdAt
                                            .replace("T", " ")
                                            .substring(0, 19),
                                    ).fromNow()}
                                </p>
                            </section>
                            <p className="text-lg font-medium">
                                {comment.comment}
                            </p>
                        </div>
                    ))}
                </main>
            </PostPageLayout>
        )
    }
}
