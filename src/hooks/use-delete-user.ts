import { useMutation } from "@tanstack/react-query"
import { deleteUser } from "../services/delete-user"

export function useDeleteUser({ userId }: { userId: number }) {
    const mutation = useMutation({
        mutationKey: ["delete-user", userId],
        mutationFn: () => deleteUser({ userId }),
        onSuccess: () => window.location.reload(),
    })

    return mutation
}
