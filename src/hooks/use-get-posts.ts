import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../services/get-posts"
import { PostResponse } from "../types/post-response"

export function useGetPosts({ page }: { page: number }) {
    const query = useQuery<PostResponse>({
        queryKey: ["get-posts", { page }],
        queryFn: async () => {
            const response = await getPosts({ page })
            return response.data
        },
    })

    return query
}
