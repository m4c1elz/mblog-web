import { PropsWithChildren } from "react"
import { Post as PostType } from "../../types/post"
import { Root } from "./root"
import { Header } from "./header"
import { Content } from "./content"
import { Footer } from "./footer"
import { User } from "./user"

export type PostProps = PropsWithChildren<PostType>

export const Post = {
    Root,
    Header,
    User,
    Content,
    Footer,
}
