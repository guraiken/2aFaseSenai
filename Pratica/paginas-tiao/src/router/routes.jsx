import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Construcao from "../pages/Construcao";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";
import Modal from "../components/Modal";

const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/material-construcao/", element: <Construcao/>},
    {path: "/bar/", element: <Bar/>},
    {path: "/sorveteria", element: <Sorveteria/>},
    {path: "/:pagina/:produto", element: <Modal/>}

])

export default router