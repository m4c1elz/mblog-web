import { PropsWithChildren } from "react"
import { Sidebar } from "../../components/sidebar"

type UserLayoutProps = PropsWithChildren

export function UserLayout({ children }: UserLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
