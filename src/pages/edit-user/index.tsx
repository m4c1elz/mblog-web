import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Textarea } from "../../components/textarea"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { useForm } from "react-hook-form"
import { LoaderCircle } from "lucide-react"
import { EditUserLayout } from "./layout"
import { useEditUser } from "../../hooks/use-edit-user"

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
    } = useEditUser({ userId: user.id })

    const onSubmit = async (data: UserEditFormType) => await editUserFn(data)

    return (
        <EditUserLayout>
            <div className="flex flex-1 items-center justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[60%] space-y-6 border border-black/40 bg-primary px-6 py-4"
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
                        <label htmlFor="name">
                            Usuário (exemplo: @maciel06)
                        </label>
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
                        <label htmlFor="descrição">Descrição</label>
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
                    <Button type="submit" className="w-full">
                        {isPending ? (
                            <LoaderCircle className="m-auto animate-spin" />
                        ) : (
                            "Enviar"
                        )}
                    </Button>
                </form>
            </div>
        </EditUserLayout>
    )
}
