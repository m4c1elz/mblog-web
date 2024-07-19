import { DialogProps } from "."
import { useDialog } from "../../providers/dialog-provider"

export function Content({ children }: DialogProps) {
    const { closeDialog, open } = useDialog()

    return (
        <div
            onClick={closeDialog}
            className={`w-svh fixed inset-0 z-10 grid h-svh cursor-default place-content-center transition-all duration-150 ${open ? "visible bg-black/70" : "invisible"}`}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={`relative z-10 flex w-[400px] flex-col rounded border border-black/20 bg-primary px-6 py-4 transition-all duration-150 sm:w-[600px] ${open ? "top-0 scale-100 opacity-100" : "top-4 scale-90 opacity-0"}`}
            >
                {children}
            </div>
        </div>
    )
}
