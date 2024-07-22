import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query.ts"
import { AuthProvider } from "./providers/auth-provider.tsx"
import { routes } from "./routes.tsx"
import "./index.css"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
