import { PropsWithChildren } from "react"
import { Post as PostType } from "../../types/post"
import { Root } from "./root"
import { Header } from "./header"
import { Content } from "./content"
import { Footer } from "./footer"
import { User } from "./user"
import { Likes } from "./likes"
import { Comments } from "./comments"
import { Date } from "./date"

export type PostProps = PropsWithChildren<PostType>

export const Post = {
    Root,
    Header,
    User,
    Date,
    Content,
    Footer,
    Likes,
    Comments,
}
