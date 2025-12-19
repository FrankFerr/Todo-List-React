import { createBrowserRouter } from "react-router-dom";
import LaMiaGiornata from "../pages/LaMiaGiornata"
import Importanti from "../pages/Importanti"
import Completati from "../pages/Completati";
import User from "../pages/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LaMiaGiornata></LaMiaGiornata>
    },
    {
        path: "/importanti",
        element: <Importanti></Importanti>
    },
    {
        path: "/completati",
        element: <Completati></Completati>
    },
    {
        path: "/user/:userId",
        element: <User></User>
    }
])