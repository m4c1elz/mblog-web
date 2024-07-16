import { Subtitles } from "lucide-react"
import { PropsWithChildren } from "react"

type CommentsProps = PropsWithChildren

export function Comments({ children }: CommentsProps) {
    return (
        <div className="flex gap-1">
            <Subtitles />
            <p>
                {children} {Number(children) > 1 ? "Comentários" : "Comentário"}
            </p>
        </div>
    )
}
