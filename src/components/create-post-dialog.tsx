import { useForm } from "react-hook-form"
import { Dialog } from "./dialog"
import { useCreatePost } from "../hooks/use-create-post"
import { Button } from "./button"

type PostData = { post: string }

export function CreatePostDialog() {
    const { handleSubmit, register } = useForm<PostData>()

    const { mutateAsync: createPost, isPending } = useCreatePost()

    async function onSubmit(data: PostData) {
        try {
            await createPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form
            className="flex h-full flex-col"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Dialog.Header>
                <Dialog.Title>Nova postagem</Dialog.Title>
                <Dialog.Description>Crie uma nova postagem.</Dialog.Description>
            </Dialog.Header>
            <div
                className="mx-1 my-4 flex-1 rounded border border-black/40"
                {...register("post")}
            >
                <textarea
                    name="post"
                    placeholder="Olá, mundo!"
                    id="post"
                    className="h-full w-full resize-none p-2"
                ></textarea>
            </div>
            <Dialog.Footer>
                <Button type="submit" disabled={isPending ? true : false}>
                    {isPending ? "Postando..." : "Postar"}
                </Button>

                <Dialog.Close>
                    <Button
                        type="reset"
                        className="bg-black font-medium text-white hover:bg-black/80"
                    >
                        Fechar
                    </Button>
                </Dialog.Close>
            </Dialog.Footer>
        </form>
    )
}
