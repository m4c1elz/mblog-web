import { api } from "../lib/axios"

export async function getUserByAtsign({ atsign }: { atsign: string }) {
    const response = await api.get(`/users/atsign/${atsign}`)
    return response
}
