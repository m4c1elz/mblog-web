import { useContext } from "react"
import { useEditPost } from "../hooks/use-edit-post"
import { Button } from "./button"
import { Dialog } from "./dialog"
import { Textarea } from "./textarea"
import { useForm } from "react-hook-form"
import { PostContext } from "./post/root"
import { useDialog } from "../providers/dialog-provider"

interface EditPostDialogProps {
    defaultValue: string
}

export function EditPostDialog({ defaultValue }: EditPostDialogProps) {
    const { id: postId } = useContext(PostContext) as { id: number }

    const { register, handleSubmit } = useForm<{ post: string }>()
    const { mutateAsync: editPostFn, isPending } = useEditPost({ postId })
    const { closeDialog } = useDialog()

    const onSubmit = async (data: { post: string }) => {
        await editPostFn(data)
        closeDialog()
    }

    return (
        <>
            <Dialog.Header>
                <Dialog.Title>Editar postagem</Dialog.Title>
                <Dialog.Description>
                    Edite o conteúdo original da sua postagem.
                </Dialog.Description>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        className="my-2 h-32 w-full"
                        defaultValue={defaultValue}
                        {...register("post")}
                    />
                    <Dialog.Footer>
                        <Button type="submit" loading={isPending}>
                            Salvar
                        </Button>
                        <Dialog.Close>
                            <Button
                                type="reset"
                                className="bg-black hover:bg-black/80 active:bg-black/50"
                            >
                                Fechar
                            </Button>
                        </Dialog.Close>
                    </Dialog.Footer>
                </form>
            </Dialog.Header>
        </>
    )
}
