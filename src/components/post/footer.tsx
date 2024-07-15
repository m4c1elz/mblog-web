import { Heart, Subtitles } from "lucide-react"
import { PostProps } from "."

export function Footer({
    likes,
    comments,
}: Pick<PostProps, "likes" | "comments">) {
    return (
        <div className="flex gap-4">
            <div className="flex gap-1">
                <Heart />
                <p>{likes} Curtidas</p>
            </div>
            <div className="flex gap-1">
                <Subtitles />
                <p>
                    {comments} {comments > 1 ? "Comentários" : "Comentário"}
                </p>
            </div>
        </div>
    )
}
