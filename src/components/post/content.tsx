import { PropsWithChildren } from "react"

type ContentProps = PropsWithChildren

export function Content({ children }: ContentProps) {
    return <p className="py-2 text-sm font-medium sm:text-base">{children}</p>
}
