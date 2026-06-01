import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout.jsx";
import CourseLandingPage from "@/components/features/CourseLandingPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div className="min-h-screen bg-black text-white flex items-center justify-center font-serif text-2xl">Página não encontrada</div>,
        children: [
            {
                index: true,
                element: <CourseLandingPage />,
            },
        ],
    },
]);

export default router;
