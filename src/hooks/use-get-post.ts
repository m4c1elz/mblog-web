import { useQuery } from "@tanstack/react-query"
import { getPost } from "../services/get-post"

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

export function useGetPost({ postId }: { postId: number | string }) {
    const query = useQuery({
        queryKey: ["get-post", postId],
        queryFn: async () => {
            const response = await getPost({ postId })
            return response.data as SinglePostType
        },
    })

    return query
}
