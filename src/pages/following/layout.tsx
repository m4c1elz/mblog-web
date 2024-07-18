import { PropsWithChildren } from "react"
import { Sidebar } from "../../components/sidebar"

type FollowingLayoutProps = PropsWithChildren

export function FollowingLayout({ children }: FollowingLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
