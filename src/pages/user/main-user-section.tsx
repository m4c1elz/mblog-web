import { Button } from "../../components/button"
import { LinkButton } from "../../components/link-button"
import { ReturnedUserType } from "../../providers/auth-provider"
import { User } from "../../types/user"

interface UserType extends User {
    postCount: number
}

interface MainUserSectionProps {
    user: UserType
    currentUser: NonNullable<ReturnedUserType>
}

export function MainUserSection({ user, currentUser }: MainUserSectionProps) {
    return (
        <section className="min-w-96 space-y-6 border border-black/20 bg-primary px-6 py-4">
            <h1 className="text-2xl font-bold">Usuário</h1>
            <div className="flex w-full flex-col items-center gap-12 text-center sm:flex-row sm:text-start">
                <div className="aspect-square w-32 rounded-full bg-slate-400 sm:h-32 sm:w-auto"></div>
                <div className="flex grow flex-col justify-between">
                    <div>
                        <h1 className="text-lg">{user.name}</h1>
                        <p className="text-black/40">@{user.atsign}</p>
                    </div>
                    {currentUser.atsign === user.atsign ? (
                        <LinkButton
                            to="/users/edit"
                            className="m-auto mt-2 w-20 sm:mx-0"
                        >
                            Editar
                        </LinkButton>
                    ) : (
                        <Button className="mx-auto mt-2 w-20 sm:mx-0">
                            Seguir
                        </Button>
                    )}
                </div>
            </div>
            {user.description && (
                <div>
                    <h1 className="text-xl font-bold">Descrição do perfil</h1>
                    <p>{user.description}</p>
                </div>
            )}
        </section>
    )
}
