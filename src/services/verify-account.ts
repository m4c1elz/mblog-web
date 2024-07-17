import { api } from "../lib/axios"

export async function verifyAccount({ token }: { token: string }) {
    const response = await api.get(`/auth/confirm/${token}`)
    return response
}
