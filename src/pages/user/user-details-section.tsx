import { dayjs } from "../../lib/dayjs"
import { Contact, CalendarPlus, ClipboardCopy } from "lucide-react"
import { User } from "../../types/user"

interface UserType extends User {
    postCount: number
    createdAt: string
}

interface UserDetailsSectionProps {
    user: UserType
}

export function UserDetailsSection({ user }: UserDetailsSectionProps) {
    return (
        <div className="min-w-96 space-y-6 border border-black/20 bg-primary px-6 py-4">
            <div className="space-y-2">
                <h1 className="text-xl font-medium">Total de seguidores</h1>
                <div className="flex items-center gap-1.5">
                    <Contact />
                    <p>{user.followers} seguidores </p>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="text-xl font-medium">Conta criada em</h1>
                <div className="flex items-center gap-1.5">
                    <CalendarPlus />
                    <p>
                        {dayjs(
                            user.createdAt.replace("T", " ").substring(0, 19),
                        ).format("DD/MM/YYYY")}
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="text-xl font-medium">Total de postagens</h1>
                <div className="flex items-center gap-1.5">
                    <ClipboardCopy />
                    <p>{user.postCount} postagens </p>
                </div>
            </div>
        </div>
    )
}
