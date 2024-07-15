import { useQuery } from "@tanstack/react-query"
import { Post as PostType } from "../types/post"
import { api } from "../lib/axios"

export function useGetPosts({ page }: { page: number }) {
    const query = useQuery({
        queryKey: ["get-posts", page],
        queryFn: async () => {
            const response = await api.get(`/posts?page=${page}`)
            return response.data as PostType[]
        },
    })

    return query
}
