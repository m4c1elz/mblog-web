import { useQuery } from "@tanstack/react-query"
import { getFollowingPosts } from "../services/get-following-posts"
import { Post as PostType } from "../types/post"

export function useGetFollowingPosts({ userId }: { userId: number }) {
    const query = useQuery({
        queryKey: ["get-following-posts", userId],
        queryFn: async () => {
            const response = await getFollowingPosts()
            return response.data as PostType[]
        },
    })

    return query
}
