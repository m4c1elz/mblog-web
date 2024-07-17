import { api } from "../lib/axios"

type UserEditFormType = {
    name: string
    atsign: string
    password: string
    description: string
}

export async function editUser({
    userId,
    data,
}: {
    userId: number | string
    data: Partial<UserEditFormType>
}) {
    const response = await api.put(`/users/${userId}`, data)
    return response
}
