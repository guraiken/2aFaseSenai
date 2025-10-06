import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Contato from "../pages/Contato";

const router = createBrowserRouter([
    {path:"/", element:<Home/>},
    {path:"/dashboard", element:<Dashboard/>},
    {path:"/contato", element:<Contato/>}
])

export default router