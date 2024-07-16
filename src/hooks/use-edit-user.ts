import { useMutation } from "@tanstack/react-query"
import { api } from "../lib/axios"
import { useQueryClient } from "@tanstack/react-query"

type UserEditFormType = {
    name: string
    atsign: string
    password: string
    description: string
}

export function useEditUser({ userId }: { userId: number }) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["edit-user", userId],
        mutationFn: async (data: UserEditFormType) => {
            await api.put(`/users/${userId}`, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-user", userId],
            })
        },
    })

    return mutation
}
