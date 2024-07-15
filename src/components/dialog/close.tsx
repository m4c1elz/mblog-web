import { DialogProps } from "."
import { useDialog } from "../../providers/dialog-provider"

export function Close({ children }: DialogProps) {
    const { closeDialog } = useDialog()
    return <div onClick={closeDialog}>{children}</div>
}
