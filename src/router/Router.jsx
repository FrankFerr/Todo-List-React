import { createBrowserRouter } from "react-router-dom";
import LaMiaGiornata from "../pages/LaMiaGiornata"
import Importanti from "../pages/Importanti"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LaMiaGiornata></LaMiaGiornata>
    },
    {
        path: "/importanti",
        element: <Importanti></Importanti>
    }
])