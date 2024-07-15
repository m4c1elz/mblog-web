import { LoaderCircle } from "lucide-react"

export function Loading() {
    return (
        <div className="flex h-screen w-full place-content-center items-center justify-center">
            <LoaderCircle
                size={50}
                className="animate-spin text-accent"
            ></LoaderCircle>
        </div>
    )
}
