import { PropsWithChildren } from "react"
import { Root } from "./root"
import { Trigger } from "./trigger"
import { Content } from "./content"
import { Header } from "./header"
import { Title } from "./title"
import { Description } from "./description"
import { Close } from "./close"
import { Footer } from "./footer"

export type DialogProps = PropsWithChildren

export const Dialog = {
    Root,
    Trigger,
    Content,
    Header,
    Title,
    Description,
    Close,
    Footer,
}
