import { PropsWithChildren } from "react"
import { Sidebar } from "../../components/sidebar"

type YourPostsLayoutProps = PropsWithChildren

export function YourPostsLayout({ children }: YourPostsLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
