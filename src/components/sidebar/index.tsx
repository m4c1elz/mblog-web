import { useWindowWidth } from "../../hooks/use-window-width"
import { Mobile } from "./mobile"
import { Desktop } from "./desktop"

export function Sidebar() {
    const width = useWindowWidth()

    if (width < 768) return <Mobile />
    else return <Desktop />
}
