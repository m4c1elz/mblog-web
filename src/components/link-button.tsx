import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { Link, LinkProps } from "react-router-dom"

interface LinkButtonProps extends LinkProps {
    children: ReactNode
}

export function LinkButton({ children, className, ...props }: LinkButtonProps) {
    return (
        <Link
            {...props}
            className={twMerge(
                "rounded bg-accent px-4 py-1.5 text-white transition-colors hover:bg-accent/80",
                className,
            )}
        >
            {children}
        </Link>
    )
}
