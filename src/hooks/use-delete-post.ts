import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../providers/auth-provider"
import { deletePost } from "../services/delete-post"

export function useDeletePost({ postId }: { postId: number }) {
    const queryClient = useQueryClient()
    const { user } = useAuth()

    const mutation = useMutation({
        mutationKey: ["delete-post", { postId }],
        mutationFn: () => deletePost({ postId }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-posts"],
            })

            queryClient.invalidateQueries({
                queryKey: ["get-user-posts", { userId: user?.id }],
            })
        },
    })

    return mutation
}
