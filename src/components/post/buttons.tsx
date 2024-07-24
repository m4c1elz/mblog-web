import { PropsWithChildren } from "react"

type ButtonsProps = PropsWithChildren

export function Buttons({ children }: ButtonsProps) {
    return (
        <div className="flex flex-1 justify-around sm:justify-normal">
            {children}
        </div>
    )
}
