import { DialogProps } from "."

export function Footer({ children }: DialogProps) {
    return <div className="flex justify-end gap-2">{children}</div>
}
