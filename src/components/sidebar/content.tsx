import { Quote, Milestone, Navigation, Upload } from "lucide-react"
import { NavLink } from "react-router-dom"
import { CreatePostDialog } from "../create-post-dialog"
import { LogoutDialog } from "../logout-dialog"
import { Dialog } from "../dialog"
import { Logo } from "../logo"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { Button } from "../button"

export function Content() {
    const { user } = useAuth() as { user: NonNullable<ReturnedUserType> }

    return (
        <>
            <Logo />
            <section>
                <NavLink
                    to="/"
                    className="flex w-full cursor-pointer gap-3 rounded-md px-1 py-4 text-xl font-medium transition-colors hover:bg-black/10"
                >
                    <Quote className="text-accent" />
                    Descubra
                </NavLink>
                <div className="flex w-full cursor-pointer gap-3 rounded-md px-1 py-4 text-xl font-medium transition-colors hover:bg-black/10">
                    <Milestone className="text-accent" />
                    Seguindo
                </div>
                <NavLink
                    to="/your-posts"
                    className="flex w-full cursor-pointer gap-3 rounded-md px-1 py-4 text-xl font-medium transition-colors hover:bg-black/10"
                >
                    <Navigation className="text-accent" />
                    Suas Postagens
                </NavLink>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <div className="flex w-full cursor-pointer gap-3 rounded-md px-1 py-4 text-xl font-medium transition-colors hover:bg-black/10">
                            <Upload className="text-accent" />
                            Nova postagem
                        </div>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <CreatePostDialog />
                    </Dialog.Content>
                </Dialog.Root>
            </section>
            <div>
                <NavLink
                    to={`/users/${user.atsign}`}
                    className="mb-2 flex w-full cursor-pointer items-center gap-3 rounded-md px-1 py-4 transition-colors hover:bg-black/10"
                >
                    <div className="aspect-square h-12 rounded-full bg-slate-500 object-contain"></div>
                    <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-black/30">@{user.atsign}</p>
                    </div>
                </NavLink>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button className="w-full bg-red-500 hover:bg-red-600">
                            Sair
                        </Button>
                    </Dialog.Trigger>
                    <Dialog.Content>
                        <LogoutDialog />
                    </Dialog.Content>
                </Dialog.Root>
            </div>
        </>
    )
}
