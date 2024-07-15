import { PropsWithChildren } from "react"
import { Sidebar } from "../../components/sidebar"

type HomeLayoutProps = PropsWithChildren

export function DiscoverLayout({ children }: HomeLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
