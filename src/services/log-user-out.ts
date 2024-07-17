import { api } from "../lib/axios"

export async function logUserOut() {
    await api.get("/auth/logout")
}
