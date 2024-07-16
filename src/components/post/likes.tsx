import { Heart } from "lucide-react"
import { PropsWithChildren } from "react"

type LikesProps = PropsWithChildren

export function Likes({ children }: LikesProps) {
    return (
        <div className="flex gap-1">
            <Heart />
            <p>{children} Curtidas</p>
        </div>
    )
}
