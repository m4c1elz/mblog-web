import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../lib/axios"
import { Post } from "../types/post"
import { useAuth } from "../providers/auth-provider"

export function useDeletePost({ postId }: { postId: number }) {
    const queryClient = useQueryClient()
    const { user } = useAuth()

    const mutation = useMutation({
        mutationKey: ["delete-post", { postId }],
        mutationFn: async () => {
            await api.delete(`/posts/${postId}`)
        },
        onSuccess: () => {
            queryClient.setQueryData(["get-posts"], (data: Post[]) => {
                if (!data) return
                return data.filter(post => post.id !== postId)
            })

            queryClient.setQueryData(
                ["get-user-posts", { userId: user?.id }],
                (data: Post[]) => {
                    if (!data) return
                    return data.filter(post => post.id !== postId)
                },
            )
        },
    })

    return mutation
}
