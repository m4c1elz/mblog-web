import { PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren

export function Header({ children }: HeaderProps) {
    return <div className="flex w-full justify-between">{children}</div>
}
