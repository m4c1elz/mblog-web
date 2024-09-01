import { Heart } from "lucide-react"
import { PropsWithChildren } from "react"

type LikesProps = PropsWithChildren

export function Likes({ children }: LikesProps) {
    return (
        <div className="flex items-center gap-1">
            <Heart />
            <p className="text-sm sm:text-base">{children}</p>
        </div>
    )
}
