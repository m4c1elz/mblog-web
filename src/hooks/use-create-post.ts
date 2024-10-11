import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDialog } from "../providers/dialog-provider"
import { useNavigate } from "react-router-dom"
import { createPost } from "../services/create-post"

type CreatePostProps = {
    post: string
}

export function useCreatePost() {
    const { closeDialog } = useDialog()

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationKey: ["create-post"],
        mutationFn: (data: CreatePostProps) => createPost(data),
        onSuccess: async () => {
            closeDialog()
            queryClient.invalidateQueries({
                queryKey: ["get-posts", { page: 1 }],
            })
            // delay a little bit before going to the  page
            await new Promise(resolve => setTimeout(resolve, 500))
            navigate("/")
        },
    })

    return mutation
}
