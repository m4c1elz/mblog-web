import { PropsWithChildren } from "react"

type ButtonsProps = PropsWithChildren

export function Buttons({ children }: ButtonsProps) {
    return <div className="flex items-center gap-2">{children}</div>
}
