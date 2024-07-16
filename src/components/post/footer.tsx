import { PropsWithChildren } from "react"

type FooterProps = PropsWithChildren

export function Footer({ children }: FooterProps) {
    return <div className="flex gap-4">{children}</div>
}
