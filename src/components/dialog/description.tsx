import { DialogProps } from "."

export function Description({ children }: DialogProps) {
    return <p className="text-sm text-black/50">{children}</p>
}
