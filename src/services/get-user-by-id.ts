import { api } from "../lib/axios"
import { UserType } from "../types/user"

export async function getUserById({ userId }: { userId: number }) {
    const response = await api.get(`/users/${userId}`)
    return response.data as UserType
}
