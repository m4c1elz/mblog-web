import { PropsWithChildren } from "react"
import { Root } from "./root"
import { Header } from "./header"
import { User } from "./user"
import { Content } from "./content"
import { Footer } from "./footer"
import { Date } from "./date"

export type SinglePostProps = PropsWithChildren & {
    id: number | string
    username: string
    atsign: string
    createdAt: string
    likes: number
    commentCount: number
}

export const SinglePost = {
    Root,
    Header,
    User,
    Date,
    Content,
    Footer,
}
