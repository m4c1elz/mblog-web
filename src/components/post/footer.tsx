import { PropsWithChildren } from "react"

type FooterProps = PropsWithChildren

export function Footer({ children }: FooterProps) {
    return <div className="flex flex-col gap-4 sm:flex-row">{children}</div>
}
