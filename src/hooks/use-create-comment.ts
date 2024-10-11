import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "../services/create-comment"

type SubmitCommentFormProps = {
    comment: string
}

export function useCreateComment({ postId }: { postId: number | string }) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["add-comment"],
        mutationFn: (data: SubmitCommentFormProps) =>
            createComment({
                postId,
                data,
            }),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ["get-post", { postId }],
            })
        },
    })

    return mutation
}
