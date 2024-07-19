import { PropsWithChildren } from "react"

type ContentProps = PropsWithChildren

export function Content({ children }: ContentProps) {
    return <p className="text-sm font-medium sm:text-base">{children}</p>
}
