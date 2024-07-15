import { useWindowWidth } from "../hooks/use-window-width"
import { MobileSidebar } from "./mobile-sidebar"
import { DesktopSidebar } from "./desktop-sidebar"

export function Sidebar() {
    const width = useWindowWidth()

    if (width < 768) return <MobileSidebar />
    else return <DesktopSidebar />
}
