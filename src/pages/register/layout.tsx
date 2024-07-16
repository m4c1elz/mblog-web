import { PropsWithChildren } from "react"

type RegisterLayoutProps = PropsWithChildren

export function RegisterLayout({ children }: RegisterLayoutProps) {
    return (
        <div className="flex h-screen w-screen flex-col items-center gap-2 bg-background md:flex-row-reverse md:justify-around md:gap-0">
            {children}
        </div>
    )
}
