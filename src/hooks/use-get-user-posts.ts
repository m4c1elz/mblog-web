import { useQuery } from "@tanstack/react-query"
import { getUserPosts } from "../services/get-user-posts"

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

export function useGetUserPosts({ userId }: { userId: number }) {
    const mutation = useQuery({
        queryKey: ["get-user-posts", userId],
        queryFn: async () => {
            const response = await getUserPosts({ userId })
            return response.data as PostType[]
        },
        enabled: userId > 0, // if it's 0, the query will not run.
    })

    return mutation
}
