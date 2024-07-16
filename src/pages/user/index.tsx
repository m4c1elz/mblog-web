import { useParams } from "react-router-dom"
import { UserLayout } from "./layout"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { Loading } from "../../components/loading"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { Button } from "../../components/button"
import { CalendarPlus, ClipboardCopy, Contact } from "lucide-react"
import { dayjs } from "../../lib/dayjs"

export function User() {
    const { atsign } = useParams()
    const { user: currentUser } = useAuth() as {
        user: NonNullable<ReturnedUserType>
    }

    const { data: user, isPending } = useQuery({
        queryKey: ["get-user", atsign],
        queryFn: async () => {
            const response = await api.get(`/users/atsign/${atsign}?posts=true`)
            return response.data
        },
    })

    if (isPending)
        return (
            <UserLayout>
                <Loading />
            </UserLayout>
        )

    if (user)
        return (
            <UserLayout>
                <main className="flex px-6 py-11">
                    <div className="space-y-4">
                        <section className="w-96 space-y-6 border border-black/20 bg-primary px-6 py-4">
                            <h1 className="text-2xl font-bold">Usuário</h1>
                            <div className="flex w-full gap-12">
                                <div className="aspect-square h-32 rounded-full bg-slate-400"></div>
                                <div className="flex grow flex-col justify-between">
                                    <div>
                                        <h1 className="text-lg">{user.name}</h1>
                                        <p className="text-black/40">
                                            @{user.atsign}
                                        </p>
                                    </div>
                                    {currentUser.atsign === user.atsign ? (
                                        <Button className="w-20">Editar</Button>
                                    ) : (
                                        <Button className="w-20">Seguir</Button>
                                    )}
                                </div>
                            </div>
                            {user.description && (
                                <div>
                                    <h1 className="text-xl font-bold">
                                        Descrição do perfil
                                    </h1>
                                    <p>{user.description}</p>
                                </div>
                            )}
                        </section>
                        <div className="w-96 space-y-6 border border-black/20 bg-primary px-6 py-4">
                            <div className="space-y-2">
                                <h1 className="text-xl font-medium">
                                    Total de seguidores
                                </h1>
                                <div className="flex items-center gap-1.5">
                                    <Contact />
                                    <p>{user.followers} seguidores </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xl font-medium">
                                    Conta criada em
                                </h1>
                                <div className="flex items-center gap-1.5">
                                    <CalendarPlus />
                                    <p>
                                        {dayjs(
                                            user.createdAt
                                                .replace("T", " ")
                                                .substring(0, 19),
                                        ).format("DD/MM/YYYY")}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-xl font-medium">
                                    Total de postagens
                                </h1>
                                <div className="flex items-center gap-1.5">
                                    <ClipboardCopy />
                                    <p>{user.posts.length} postagens </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </UserLayout>
        )
}
