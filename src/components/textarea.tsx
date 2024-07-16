import { forwardRef, TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ children, className, ...props }: TextareaProps, ref) => {
        return (
            <textarea
                {...props}
                ref={ref}
                className={twMerge(
                    "resize-none rounded border border-black/20 p-2 outline-none focus:border-black/40",
                    className,
                )}
            >
                {children}
            </textarea>
        )
    },
)
