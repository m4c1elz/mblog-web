import { useQuery } from "@tanstack/react-query"
import { getUserByAtsign } from "../services/get-user-by-atsign"

export function useGetUser({ atsign }: { atsign: string }) {
    const query = useQuery({
        queryKey: ["get-user", { atsign }],
        queryFn: () => getUserByAtsign({ atsign }),
    })

    return query
}
