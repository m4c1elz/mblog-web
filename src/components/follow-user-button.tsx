import { ButtonHTMLAttributes } from "react"
import { Button } from "./button"
import { useFollowUser } from "../hooks/use-follow-user"
import { useUnfollowUser } from "../hooks/use-unfollow-user"

interface FollowUserButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFollowing: boolean
    userId: number
    atsign: string
}

export function FollowUserButton({
    isFollowing,
    userId,
    atsign,
    ...props
}: FollowUserButtonProps) {
    if (isFollowing) {
        const { mutateAsync: unfollowUserFn, isPending } = useUnfollowUser({
            userId,
            atsign,
        })

        return (
            <Button
                {...props}
                onClick={async () => await unfollowUserFn()}
                loading={isPending}
                className="mx-auto mt-2 w-fit sm:mx-0"
            >
                Parar de seguir
            </Button>
        )
    } else {
        const { mutateAsync: followUserFn, isPending } = useFollowUser({
            userId,
            atsign,
        })

        return (
            <Button
                {...props}
                onClick={async () => await followUserFn()}
                loading={isPending}
                className="mx-auto mt-2 w-fit sm:mx-0"
            >
                Seguir
            </Button>
        )
    }
}
