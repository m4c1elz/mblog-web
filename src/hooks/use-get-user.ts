import { useQuery } from "@tanstack/react-query"
import { getUserByAtsign } from "../services/get-user-by-atsign"

export interface UserType {
    id: number
    name: string
    atsign: string
    email: string
    followers: number
    description: any
    createdAt: string
    updatedAt: any
    postCount: number
}

export function useGetUser({ atsign }: { atsign: string }) {
    const query = useQuery({
        queryKey: ["get-user", atsign],
        queryFn: async () => {
            const response = await getUserByAtsign({ atsign })
            return response.data as UserType
        },
    })

    return query
}
