import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/axios"
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
    })

    return mutation
}
