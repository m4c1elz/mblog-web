import { PropsWithChildren } from "react"

type LoginLayoutProps = PropsWithChildren

export function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <div className="flex h-screen w-screen flex-col items-center gap-2 bg-background md:flex-row md:justify-evenly md:gap-0">
            {children}
        </div>
    )
}
