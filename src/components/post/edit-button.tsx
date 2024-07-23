import { Edit } from "lucide-react"
import { Dialog } from "../dialog"
import { EditPostDialog } from "../edit-post-dialog"

interface EditButtonProps {
    defaultValue: string
}

export function EditButton({ defaultValue }: EditButtonProps) {
    return (
        <div onClick={e => e.stopPropagation()}>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Edit
                        size={30}
                        className="rounded p-1 text-black/40 hover:bg-black/20"
                    />
                </Dialog.Trigger>
                <Dialog.Content>
                    <EditPostDialog defaultValue={defaultValue} />
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}
