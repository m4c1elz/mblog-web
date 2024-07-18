import { api } from "../lib/axios"

export async function followUser({ userId }: { userId: number }) {
    const response = await api.post(`/users/${userId}/follow`)
    return response
}
