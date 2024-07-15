import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDialog } from "../providers/dialog-provider"
import { api } from "../lib/axios"

type PostData = {
    post: string
}

export function useCreatePost() {
    const { closeDialog } = useDialog()

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["create-post"],
        mutationFn: async (data: PostData) => {
            await api.post("/posts", data)
        },
        onSuccess: () => {
            closeDialog()
            queryClient.invalidateQueries({ queryKey: ["get-posts"] })
        },
    })

    return mutation
}
