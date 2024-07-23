import { Trash } from "lucide-react"
import { Dialog } from "../dialog"
import { DeletePostDialog } from "../delete-post-dialog"

export function DeleteButton() {
    return (
        <div onClick={e => e.stopPropagation()}>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Trash
                        size={30}
                        className="rounded p-1 text-black/40 hover:bg-black/20 hover:text-red-500"
                    />
                </Dialog.Trigger>
                <Dialog.Content>
                    <DeletePostDialog />
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}
