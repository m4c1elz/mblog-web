import { useDeleteUser } from "../hooks/use-delete-user"
import { useAuth } from "../providers/auth-provider"
import { Button } from "./button"
import { Dialog } from "./dialog"

export function DeleteUserDialog() {
    const { user } = useAuth()
    const { mutateAsync: deleteUserFn, isPending } = useDeleteUser({
        userId: user!.id,
    })

    return (
        <>
            <Dialog.Header>
                <Dialog.Title>Excluir usuário</Dialog.Title>
                <Dialog.Description>
                    Remova seu usuário por completo do MBlog.
                </Dialog.Description>
            </Dialog.Header>
            <div className="flex-1 py-4">
                <p>
                    Tem certeza que deseja excluir seu usuário? Esta ação é
                    irreversível!
                </p>
            </div>
            <Dialog.Footer>
                <Button
                    type="button"
                    className="bg-red-500 hover:bg-red-400"
                    onClick={async () => await deleteUserFn()}
                    loading={isPending}
                >
                    Sim, desejo excluir meu usuário
                </Button>
                <Dialog.Close>
                    <Button
                        type="button"
                        className="bg-black hover:bg-black/80 active:bg-black/50"
                    >
                        Voltar
                    </Button>
                </Dialog.Close>
            </Dialog.Footer>
        </>
    )
}
