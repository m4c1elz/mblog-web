import { Heart, Subtitles } from "lucide-react"
import { useForm } from "react-hook-form"
import { SinglePostProps } from "."
import { useCreateComment } from "../../hooks/use-create-comment"

export function Footer({
    id,
    likes,
    commentCount,
}: Pick<SinglePostProps, "id" | "likes" | "commentCount">) {
    type SubmitCommentFormType = {
        comment: string
    }

    const { handleSubmit, register } = useForm<SubmitCommentFormType>()

    const { mutateAsync: addComment, isPending: isCreatingComment } =
        useCreateComment({ postId: id })

    async function onSubmit(data: SubmitCommentFormType) {
        await addComment(data)
    }

    return (
        <>
            <section className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <Heart />
                    {likes}
                </div>
                <div className="flex items-center gap-1">
                    <Subtitles />
                    {commentCount}
                </div>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <h4>Deixe um comentário!</h4>
                <textarea
                    id="comment-area"
                    placeholder="Coloque seu comentário aqui!"
                    className="h-32 w-full resize-none rounded border border-black/20 p-2"
                    {...register("comment")}
                ></textarea>
                <button className="w-full rounded bg-accent py-2 font-medium text-primary transition-colors hover:bg-accent/90">
                    {isCreatingComment ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </>
    )
}
