import { useQuery } from "@tanstack/react-query"
import { getUserPosts } from "../services/get-user-posts"

interface GetUserProps {
    userId: number
}

export function useGetUserPosts({ userId }: GetUserProps) {
    const mutation = useQuery({
        queryKey: ["get-user-posts", { userId }],
        queryFn: () => getUserPosts({ userId }),
        enabled: userId > 0, // if it's 0, the query will not run.
    })

    return mutation
}
