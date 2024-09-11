import { useQuery } from "@tanstack/react-query"
import { verifyAccount } from "../services/verify-account"

export function useVerifyAccount({ token }: { token: string }) {
    const query = useQuery({
        queryKey: ["verify-email", { token }],
        queryFn: async () => {
            const response = await verifyAccount({ token })
            if (response.status === 401) throw new Error("token expirado")

            return "E-mail verificado com sucesso!"
        },
    })

    return query
}
