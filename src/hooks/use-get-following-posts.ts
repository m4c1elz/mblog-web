import { useQuery } from "@tanstack/react-query"
import { getFollowingPosts } from "../services/get-following-posts"

export function useGetFollowingPosts({ userId }: { userId: number }) {
    const query = useQuery({
        queryKey: ["get-following-posts", { userId }],
        queryFn: () => getFollowingPosts(),
    })

    return query
}
