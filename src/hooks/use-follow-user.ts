import { useMutation, useQueryClient } from "@tanstack/react-query"
import { followUser } from "../services/follow-user"
import { UserType } from "./use-get-user"
import { useAuth } from "../providers/auth-provider"

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
        mutationKey: ["follow-user", userId],
        mutationFn: async () => await followUser({ userId }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-following-posts", user?.id],
            })
            const cached = queryClient.getQueryData(["get-user", atsign])

            if (cached) {
                queryClient.setQueryData(
                    ["get-user", atsign],
                    (data: UserType) => {
                        return {
                            ...data,
                            followers: data.followers + 1,
                            isFollowing: true,
                        }
                    },
                )
            }
        },
    })

    return mutation
}
