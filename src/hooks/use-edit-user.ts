import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { editUser } from "../services/edit-user"
import { useAuth } from "../providers/auth-provider"

type UserEditFormType = {
    name: string
    atsign: string
    password: string
    description: string
}

export function useEditUser({ userId }: { userId: number }) {
    const queryClient = useQueryClient()

    const { user } = useAuth()

    const mutation = useMutation({
        mutationKey: ["edit-user", userId],
        mutationFn: (data: UserEditFormType) => editUser({ userId, data }),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["get-user", { userId }],
            })

            if (!user) {
                return
            }

            user.atsign = variables.atsign
            user.name = variables.name
        },
    })

    return mutation
}
