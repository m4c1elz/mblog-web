import { PropsWithChildren } from "react"
import { PostProps } from "."
import { dayjs } from "../../lib/dayjs"

type HeaderProps = PropsWithChildren

export function Header({ children }: HeaderProps) {
    return <div className="flex w-full justify-between">{children}</div>
}
