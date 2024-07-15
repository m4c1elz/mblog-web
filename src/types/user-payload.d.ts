import { JwtPayload } from "jwt-decode"

export type UserPayload = JwtPayload & {
    userId: number
}
