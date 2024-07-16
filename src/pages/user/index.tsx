import { useParams } from "react-router-dom"
import { UserLayout } from "./layout"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { Loading } from "../../components/loading"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { Button } from "../../components/button"
import { CalendarPlus, ClipboardCopy, Contact } from "lucide-react"
import { dayjs } from "../../lib/dayjs"
import { Post } from "../../components/post"

export interface UserType {
    id: number
    name: string
    atsign: string
    email: string
    followers: number
    description: any
    createdAt: string
    updatedAt: any
    posts: Post[]
}

export interface Post {
    id: number
    post: string
    likes: number
    createdAt: string
    updatedAt: any
}

export function User() {
    const { atsign } = useParams()
    const { user: currentUser } = useAuth() as {
        user: NonNullable<ReturnedUserType>
    }

    const { data: user, isPending } = useQuery({
        queryKey: ["get-user", atsign],
        queryFn: async () => {
            const response = await api.get(`/users/atsign/${atsign}?posts=true`)
            return response.data as UserType
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
                <main className="flex h-screen flex-1 flex-col items-center overflow-auto px-6 py-11 md:items-start xl:flex-row">
                    <div className="m-auto space-y-4 xl:m-0">
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
                    <div className="w-screen space-y-4 pt-4 md:w-full md:flex-1 xl:pt-0">
                        <h1 className="text-medium text-center text-xl">
                            Postagens
                        </h1>
                        <div className="h-auto pb-16">
                            {user.posts.map(post => (
                                <Post.Root id={post.id} key={post.id}>
                                    <Post.Header>
                                        <Post.User atsign={user.atsign}>
                                            {user.name}
                                        </Post.User>
                                        <Post.Date>{post.createdAt}</Post.Date>
                                    </Post.Header>
                                    <Post.Content>{post.post}</Post.Content>
                                    <Post.Footer>
                                        <Post.Likes>{post.likes}</Post.Likes>
                                    </Post.Footer>
                                </Post.Root>
                            ))}
                        </div>
                    </div>
                </main>
            </UserLayout>
        )
}
