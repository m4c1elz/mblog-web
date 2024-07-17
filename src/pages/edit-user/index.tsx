import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Textarea } from "../../components/textarea"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { useForm } from "react-hook-form"
import { EditUserLayout } from "./layout"
import { useEditUser } from "../../hooks/use-edit-user"
import { removeEmptyFields } from "../../helpers/remove-empty-fields"
import { Dialog } from "../../components/dialog"
import { DeleteUserDialog } from "../../components/delete-user-dialog"

type UserEditFormType = {
    name: string
    atsign: string
    password: string
    description: string
}

export function EditUser() {
    const { user } = useAuth() as { user: NonNullable<ReturnedUserType> }
    const { register, handleSubmit } = useForm<UserEditFormType>()

    const {
        mutateAsync: editUserFn,
        isPending,
        isSuccess,
        isError,
        error,
    } = useEditUser({ userId: user.id })

    const onSubmit = async (data: UserEditFormType) => {
        removeEmptyFields(data) // for removing fields that are set as "" or null
        await editUserFn(data)
    }

    isError && console.log(error)

    return (
        <EditUserLayout>
            <div className="flex flex-1 items-center justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-12 w-[80%] space-y-6 border border-black/40 bg-primary px-6 py-4 md:mt-0 lg:w-[60%]"
                >
                    <h1 className="text-2xl font-bold">Editar usuário</h1>
                    <div className="space-y-2">
                        <label htmlFor="name">Nome</label>
                        <Input
                            type="text"
                            placeholder="Maciel"
                            defaultValue={user.name}
                            {...register("name")}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="atsign">Usuário</label>
                        <p className="text-sm text-black/40">
                            (exemplo: "maciel06" aparecerá para os outros como
                            "@maciel06")
                        </p>
                        <Input
                            type="text"
                            placeholder="macielgames"
                            defaultValue={user.atsign}
                            {...register("atsign")}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password">Senha</label>
                        <Input
                            type="password"
                            placeholder="********"
                            {...register("password")}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Descrição</label>
                        <Textarea
                            placeholder="Lorem ipsum dolor it sit amet..."
                            className="h-32"
                            defaultValue={user.description}
                            {...register("description")}
                        />
                    </div>
                    {isSuccess && (
                        <p className="text-center font-medium text-emerald-500">
                            Usuário editado com sucesso.
                        </p>
                    )}
                    {isError && (
                        <p className="text-center font-medium text-red-500">
                            Houve um erro ao editar o usuário.
                        </p>
                    )}
                    <div>
                        <Button
                            type="submit"
                            loading={isPending && true}
                            className="mb-2 w-full"
                        >
                            Enviar
                        </Button>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button
                                    type="button"
                                    className="w-full bg-red-500 hover:bg-red-400 active:bg-red-600"
                                >
                                    Excluir usuário
                                </Button>
                            </Dialog.Trigger>
                            <Dialog.Content>
                                <DeleteUserDialog />
                            </Dialog.Content>
                        </Dialog.Root>
                    </div>
                </form>
            </div>
        </EditUserLayout>
    )
}
