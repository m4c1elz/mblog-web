import { useParams } from "react-router-dom"
import { PostPageLayout } from "./layout"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { Loading } from "../../components/loading"
import { dayjs } from "../../lib/dayjs"
import { SinglePost } from "../../components/single-post"

type SinglePostType = {
    id: number
    username: string
    atsign: string
    post: string
    commentCount: number
    likes: number
    createdAt: string
    updatedAt: any
    comments: Comment[]
}

type Comment = {
    user: string
    comment: string
    createdAt: string
    updatedAt: any
}

export function PostPage() {
    const { id } = useParams()

    const { data: post, isPending } = useQuery({
        queryKey: ["get-post", id],
        queryFn: async () => {
            const response = await api.get(`/posts/${id}?comments=true`)
            console.log(response.data)
            return response.data as SinglePostType
        },
    })

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
                                <div className="flex items-center gap-1">
                                    <div className="aspect-square h-8 rounded-full bg-slate-400"></div>
                                    <p className="font-base">@{comment.user}</p>
                                </div>
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
