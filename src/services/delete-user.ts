import { api } from "../lib/axios"

export async function deleteUser({ userId }: { userId: number }) {
    const response = await api.delete(`/users/${userId}`)
    return response
}
