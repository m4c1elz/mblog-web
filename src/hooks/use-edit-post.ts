import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editPost } from "../services/edit-post"
import { useAuth } from "../providers/auth-provider"
import { useDialog } from "../providers/dialog-provider"

interface EditPostProps {
    post: string
}

export function useEditPost({ postId }: { postId: number }) {
    const queryClient = useQueryClient()
    const { user } = useAuth()
    const { closeDialog } = useDialog()

    const mutation = useMutation({
        mutationKey: ["edit-post", { postId }],
        mutationFn: ({ post }: EditPostProps) => editPost({ postId, post }),
        onSuccess: () => {
            closeDialog()

            queryClient.invalidateQueries({
                queryKey: ["get-posts"],
            })

            queryClient.invalidateQueries({
                queryKey: ["get-user-posts", { userId: { userId: user?.id } }],
            })
        },
    })

    return mutation
}
