import { Subtitles } from "lucide-react"
import { PropsWithChildren } from "react"

type CommentsProps = PropsWithChildren

export function Comments({ children }: CommentsProps) {
    return (
        <div className="flex items-center gap-1">
            <Subtitles />
            <p className="text-sm sm:text-base">{children}</p>
        </div>
    )
}
