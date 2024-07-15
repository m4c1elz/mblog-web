import { Sidebar } from "../../components/sidebar"
import { PropsWithChildren } from "react"

type PostLayoutProps = PropsWithChildren

export function PostPageLayout({ children }: PostLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
