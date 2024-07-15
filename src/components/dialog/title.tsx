import { DialogProps } from "."

export function Title({ children }: DialogProps) {
    return <h1 className="text-xl font-bold">{children}</h1>
}
