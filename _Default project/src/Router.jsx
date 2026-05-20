import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout.jsx";

const router = createBrowserRouter([
    // Created in en-US and pt-BR versions for better accessibility (and SEO)
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>Page not found</div>,
        children: [
            {
                path: true, // Match the root path
                element: <div>Home Page</div>,
            },
        ],
    },
]);

export default router;
