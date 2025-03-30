
import { createBrowserRouter } from "react-router-dom";
import Pages2 from "../comporent/Pages2";
import Pages3 from "../comporent/Pages3";
import Pages4 from "../comporent/Pages4";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Pages2 />,
    },
    {
        path: "/Pages3",
        element: <Pages3 />,
    },
    {
        path: "/Pages4",
        element: <Pages4 />,
    }
]);

export default router;


