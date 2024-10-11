import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../services/get-posts"

export function useGetPosts({ page }: { page: number }) {
    const query = useQuery({
        queryKey: ["get-posts", { page }],
        queryFn: () => getPosts({ page }),
    })

    return query
}
