import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editPost } from "../services/edit-post"
import { Post } from "../types/post"
import { useAuth } from "../providers/auth-provider"
import { dayjs } from "../lib/dayjs"

export function useEditPost({ postId }: { postId: number }) {
    const queryClient = useQueryClient()
    const { user } = useAuth()

    const mutation = useMutation({
        mutationKey: ["edit-post", postId],
        mutationFn: async ({ post }: { post: string }) =>
            await editPost({ postId, post }),
        onSuccess: (_, variables) => {
            const cachedPosts = queryClient.getQueryData(["get-posts"])

            if (cachedPosts) {
                queryClient.setQueryData(["get-posts"], (data: Post[]) => {
                    // mapping through each post in original query, updating only the edited one
                    const today = new Date().toLocaleDateString("pt-br")

                    return data.map(post => {
                        if (post.id === postId) {
                            return {
                                ...post,
                                post: variables.post,
                                updatedAt: dayjs(today).fromNow(),
                            }
                        } else {
                            return post
                        }
                    })
                })
            }

            queryClient.invalidateQueries({
                queryKey: ["get-user-posts", { userId: user?.id }],
            })
        },
    })

    return mutation
}
