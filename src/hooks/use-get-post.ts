import { useQuery } from "@tanstack/react-query"
import { getPost } from "../services/get-post"

interface GetPostProps {
    postId: number | string
}

export function useGetPost({ postId }: GetPostProps) {
    const query = useQuery({
        queryKey: ["get-post", { postId }],
        queryFn: () => getPost({ postId }),
    })

    return query
}
