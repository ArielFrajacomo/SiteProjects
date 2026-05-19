 
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout.jsx';

const router = createBrowserRouter([
    // Created in en-US and pt-BR versions for better accessibility (and SEO)
    {
        path: '/',
        element: <MainLayout />,
    }
]);

export default router;