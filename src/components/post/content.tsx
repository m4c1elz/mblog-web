import { PropsWithChildren } from "react"

type ContentProps = PropsWithChildren

export function Content({ children }: ContentProps) {
    return <p className="font-medium">{children}</p>
}
