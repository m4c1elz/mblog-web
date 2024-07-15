import { createContext, useContext, PropsWithChildren, useState } from "react"

type DialogContextType = {
    open: boolean
    openDialog: () => void
    closeDialog: () => void
}

const DialogContext = createContext<DialogContextType | null>(null)

export function DialogProvider({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false)

    const openDialog = () => setOpen(true)
    const closeDialog = () => setOpen(false)

    return (
        <DialogContext.Provider value={{ open, openDialog, closeDialog }}>
            {children}
        </DialogContext.Provider>
    )
}

export function useDialog() {
    const context = useContext(DialogContext)
    return context as DialogContextType
}
