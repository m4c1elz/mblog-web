import { DialogProps } from "."
import { DialogProvider } from "../../providers/dialog-provider"

export function Root({ children }: DialogProps) {
    return <DialogProvider>{children}</DialogProvider>
}
