import { useQuery } from "@tanstack/react-query"
import { Post as PostType } from "../types/post"
import { getPosts } from "../services/get-posts"

export function useGetPosts({ page }: { page: number }) {
    const query = useQuery({
        queryKey: ["get-posts"],
        queryFn: async () => {
            const response = await getPosts({ page })
            return response.data as PostType[]
        },
    })

    return query
}
