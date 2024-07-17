import { api } from "../lib/axios"

export async function logUserIn(data: { email: string; password: string }) {
    const response = await api.post("/auth/login", data)
    return response
}
