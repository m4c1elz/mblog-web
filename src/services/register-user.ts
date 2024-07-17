import { api } from "../lib/axios"

export async function registerUser(data: { email: string; password: string }) {
    const response = await api.post("/auth/register", data)
    return response
}
