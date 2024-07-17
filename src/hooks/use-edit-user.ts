import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { editUser } from "../services/edit-user"

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
            await editUser({ userId, data })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-user", userId],
            })
        },
    })

    return mutation
}
