import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../lib/axios"

type SubmitCommentFormType = {
    comment: string
}

export function useCreateComment({ postId }: { postId: number | string }) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["add-comment"],
        mutationFn: async (data: SubmitCommentFormType) => {
            await api.post(`/posts/${postId}/comments`, data)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ["get-post", postId],
            })
        },
    })

    return mutation
}
