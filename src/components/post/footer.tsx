import { PropsWithChildren } from "react"

type FooterProps = PropsWithChildren

export function Footer({ children }: FooterProps) {
    return (
        <div className="flex w-full items-center justify-between">
            {children}
        </div>
    )
}
