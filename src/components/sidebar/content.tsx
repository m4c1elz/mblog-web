import { Quote, Milestone, Navigation, Upload } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Dialog } from "../dialog"
import { Logo } from "../logo"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { Button } from "../button"
import { lazy } from "react"

const LogoutDialog = lazy(() =>
    import("../logout-dialog").then(module => ({
        default: module.LogoutDialog,
    })),
)

const CreatePostDialog = lazy(() =>
    import("../create-post-dialog").then(module => ({
        default: module.CreatePostDialog,
    })),
)

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
                <NavLink
                    to="/following"
                    className="flex w-full cursor-pointer gap-3 rounded-md px-1 py-4 text-xl font-medium transition-colors hover:bg-black/10"
                >
                    <Milestone className="text-accent" />
                    Seguindo
                </NavLink>
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
