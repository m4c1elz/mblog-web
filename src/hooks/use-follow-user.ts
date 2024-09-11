import { useMutation, useQueryClient } from "@tanstack/react-query"
import { followUser } from "../services/follow-user"
import { useAuth } from "../providers/auth-provider"
import { UserType } from "../types/user"

export function useFollowUser({
    userId,
    atsign,
}: {
    userId: number
    atsign: string
}) {
    const queryClient = useQueryClient()
    const { user } = useAuth()

    const mutation = useMutation({
        mutationKey: ["follow-user", { userId }],
        mutationFn: () => followUser({ userId }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-following-posts", user?.id],
            })

            queryClient.setQueryData<Required<UserType>>(
                ["get-user", { atsign }],
                data => {
                    if (!data) {
                        return
                    }

                    return {
                        ...data,
                        followers: data.followers + 1,
                        isFollowing: true,
                    }
                },
            )
        },
    })

    return mutation
}
