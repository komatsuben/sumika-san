import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/sumika/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "notfound",
                element: <NotFound />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
