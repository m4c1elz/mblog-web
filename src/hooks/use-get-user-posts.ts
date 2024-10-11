import { useQuery } from "@tanstack/react-query"
import { getUserPosts } from "../services/get-user-posts"

export function useGetUserPosts({ userId }: { userId: number }) {
    const mutation = useQuery({
        queryKey: ["get-user-posts", { userId }],
        queryFn: async () => {
            const posts = await getUserPosts({ userId })
            return posts
        },
        enabled: userId > 0, // if it's 0, the query will not run.
    })

    return mutation
}
