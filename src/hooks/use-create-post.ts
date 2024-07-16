import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDialog } from "../providers/dialog-provider"
import { api } from "../lib/axios"
import { useNavigate } from "react-router-dom"

type PostData = {
    post: string
}

export function useCreatePost() {
    const { closeDialog } = useDialog()

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationKey: ["create-post"],
        mutationFn: async (data: PostData) => {
            await api.post("/posts", data)
        },
        onSuccess: () => {
            closeDialog()
            queryClient.invalidateQueries({ queryKey: ["get-posts"] })
            navigate("/")
        },
    })

    return mutation
}
