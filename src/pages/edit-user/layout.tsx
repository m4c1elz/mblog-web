import { PropsWithChildren } from "react"
import { Sidebar } from "../../components/sidebar"

type EditUserLayoutProps = PropsWithChildren

export function EditUserLayout({ children }: EditUserLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}
