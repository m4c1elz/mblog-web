import { LoaderCircle } from "lucide-react"
import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
    loading?: boolean
}

export function Button({
    children,
    className,
    loading = false,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={loading && true}
            className={twMerge(
                "rounded bg-accent px-4 py-1.5 text-white transition-colors hover:bg-accent/80 disabled:bg-accent/50",
                className,
            )}
            {...props}
        >
            {loading ? (
                <LoaderCircle className="m-auto animate-spin" />
            ) : (
                children
            )}
        </button>
    )
}
