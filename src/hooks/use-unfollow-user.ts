import { useMutation } from "@tanstack/react-query"
import { unfollowUser } from "../services/unfollow-user"
import { useQueryClient } from "@tanstack/react-query"

interface UserType {
    id: number
    name: string
    atsign: string
    email: string
    followers: number
    description: any
    createdAt: string
    updatedAt: any
    postCount: number
    isFollowing: boolean
}

export function useUnfollowUser({
    userId,
    atsign,
}: {
    userId: number
    atsign: string
}) {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey: ["unfollow-user", userId],
        mutationFn: () => unfollowUser({ userId }),
        onSuccess: () => {
            queryClient.setQueryData<UserType>(
                ["get-user", { atsign }],
                data => {
                    if (!data) {
                        return
                    }

                    return {
                        ...data,
                        followers: data.followers - 1,
                        isFollowing: false,
                    }
                },
            )
        },
    })

    return mutation
}
