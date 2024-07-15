import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                "rounded bg-accent px-4 py-1.5 text-white transition-colors hover:bg-accent/80",
                className,
            )}
        >
            {children}
        </button>
    )
}
