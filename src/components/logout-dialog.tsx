import { Button } from "./button"
import { Dialog } from "./dialog"
import { useAuth } from "../providers/auth-provider"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function LogoutDialog() {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    async function handleLogout() {
        setLoading(true)
        await logout()
        navigate("/login", { replace: true })
    }

    return (
        <div className="flex h-full flex-col">
            <Dialog.Header>
                <Dialog.Title>Sair do MBlog</Dialog.Title>
                <Dialog.Description>Sair da sessão atual.</Dialog.Description>
            </Dialog.Header>
            <div className="flex-1 py-3.5">
                <p>
                    Deseja mesmo sair do MBlog? Se quiser acessar a plataforma
                    pelo seu dispositivo novamente, terá que realizar login
                    novamente.
                </p>
            </div>
            <Dialog.Footer>
                <Button
                    onClick={handleLogout}
                    loading={loading}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-red-300"
                >
                    Sair
                </Button>
                <Dialog.Close>
                    <Button className="bg-black hover:bg-black/80">
                        Fechar
                    </Button>
                </Dialog.Close>
            </Dialog.Footer>
        </div>
    )
}
