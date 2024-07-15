import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query.ts"
import { AuthProvider } from "./providers/auth-provider.tsx"
import { ProtectedRoute } from "./components/protected-route.tsx"
import { Loading } from "./components/loading.tsx"
import "./index.css"

const Discover = lazy(() =>
    import("./pages/discover").then(module => ({
        default: module.Discover,
    })),
)
const Login = lazy(() =>
    import("./pages/login").then(module => ({
        default: module.Login,
    })),
)

const Post = lazy(() =>
    import("./pages/post-page").then(module => ({
        default: module.PostPage,
    })),
)

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <Discover />
                </Suspense>
            </ProtectedRoute>
        ),
    },
    {
        path: "/posts/:id",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <Post />
                </Suspense>
            </ProtectedRoute>
        ),
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
