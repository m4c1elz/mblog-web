import { useMutation } from "@tanstack/react-query"
import { unfollowUser } from "../services/unfollow-user"
import { useQueryClient } from "@tanstack/react-query"
import { User } from "../types/user"

export function useUnfollowUser({
    userId,
    atsign,
}: {
    userId: number
    atsign: string
}) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["unfollow-user", { userId }],
        mutationFn: async () => await unfollowUser({ userId }),
        onSuccess: () => {
            const cached = queryClient.getQueryData(["get-user", { atsign }])

            if (cached) {
                queryClient.setQueryData(
                    ["get-user", { atsign }],
                    (data: User) => {
                        return {
                            ...data,
                            followers: data.followers - 1,
                            isFollowing: false,
                        }
                    },
                )
            }
        },
    })

    return mutation
}
