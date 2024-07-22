import { User } from "./pages/user"
import { PostPage } from "./pages/post-page"
import { ProtectedRoute } from "./components/protected-route"
import { Discover } from "./pages/discover"
import { EditUser } from "./pages/edit-user"
import { Following } from "./pages/following"
import { Login } from "./pages/login"
import { Register } from "./pages/register"
import { VerifyAccount } from "./pages/verify-account"
import { YourPosts } from "./pages/your-posts"
import { type RouteObject } from "react-router-dom"

export const routes: RouteObject[] = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/verify/:token",
        element: <VerifyAccount />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Discover />
            </ProtectedRoute>
        ),
    },
    {
        path: "/posts/:id",
        element: (
            <ProtectedRoute>
                <PostPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/users/:atsign",
        element: (
            <ProtectedRoute>
                <User />
            </ProtectedRoute>
        ),
    },
    {
        path: "/users/edit",
        element: (
            <ProtectedRoute>
                <EditUser />
            </ProtectedRoute>
        ),
    },
    {
        path: "/your-posts",
        element: (
            <ProtectedRoute>
                <YourPosts />
            </ProtectedRoute>
        ),
    },
    {
        path: "/following",
        element: (
            <ProtectedRoute>
                <Following />
            </ProtectedRoute>
        ),
    },
]
