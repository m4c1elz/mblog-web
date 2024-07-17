import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "../services/create-comment"

type SubmitCommentFormType = {
    comment: string
}

export function useCreateComment({ postId }: { postId: number | string }) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["add-comment"],
        mutationFn: async (data: SubmitCommentFormType) =>
            await createComment({
                postId,
                data,
            }),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ["get-post", postId],
            })
        },
    })

    return mutation
}
