
import { createBrowserRouter } from "react-router-dom";
import Index from "../comporent/index";
import PaymentMethod from "../comporent/PaymentMethod";
import Bkash from "../comporent/bnrPages/bkash";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/payment-method",
        element: <PaymentMethod />,
    },
    {
        path: "/payment-method/bkash",
        element: <Bkash />,
    }
]);

export default router;


