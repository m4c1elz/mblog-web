import { useQuery } from "@tanstack/react-query"
import { getPost } from "../services/get-post"

export function useGetPost({ postId }: { postId: number | string }) {
    const query = useQuery({
        queryKey: ["get-post", { postId }],
        queryFn: async () => await getPost({ postId }),
    })

    return query
}
