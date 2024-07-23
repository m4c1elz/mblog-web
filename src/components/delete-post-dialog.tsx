import { useDeletePost } from "../hooks/use-delete-post"
import { Button } from "./button"
import { Dialog } from "./dialog"
import { useContext } from "react"
import { PostContext } from "./post/root"
import { useDialog } from "../providers/dialog-provider"

export function DeletePostDialog() {
    const { id } = useContext(PostContext)!

    const { closeDialog } = useDialog()

    const { mutateAsync: deletePostFn, isPending } = useDeletePost({
        postId: id,
    })

    async function handleClick() {
        await deletePostFn()
        closeDialog()
    }

    return (
        <>
            <Dialog.Header>
                <Dialog.Title>Deletar postagem</Dialog.Title>
                <Dialog.Description>
                    Remova por completo sua postagem do MBlog.
                </Dialog.Description>
            </Dialog.Header>
            <div className="py-3">
                <p>Tem certeza? Sabe que o print é eterno.</p>
                <cite> - Maciel, dev do MBlog</cite>
            </div>
            <Dialog.Footer>
                <Button
                    loading={isPending}
                    onClick={handleClick}
                    className="bg-red-500 hover:bg-red-400 active:bg-red-300"
                >
                    Deletar
                </Button>
                <Dialog.Close>
                    <Button className="bg-black hover:bg-black/80 active:bg-black/50">
                        Fechar
                    </Button>
                </Dialog.Close>
            </Dialog.Footer>
        </>
    )
}
