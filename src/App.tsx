import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/styles.scss';
import PhotoUploadView from './views/PhotoUploadView';
import StartView from './views/StartView';

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartView />,
    },
    {
        path: '/photo-upload',
        element: <PhotoUploadView />,
    },
]);

const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};

export default App;
