import { DialogProps } from "."
import { useDialog } from "../../providers/dialog-provider"

export function Trigger({ children }: DialogProps) {
    const { openDialog } = useDialog()
    return (
        <div
            onClick={() => {
                openDialog()
            }}
        >
            {children}
        </div>
    )
}
