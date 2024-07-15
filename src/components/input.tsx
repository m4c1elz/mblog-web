import { forwardRef, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        ref={ref}
        {...props}
        className="w-full rounded-md border border-black/20 p-2 outline-none focus:border-black/40"
    />
))
