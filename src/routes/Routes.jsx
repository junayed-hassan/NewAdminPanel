
import { createBrowserRouter } from "react-router-dom";
import Index from "../comporent/Index";
import PaymentMethod from "../comporent/PaymentMethod";
import Bkash from "../comporent/bnrPages/Bkash";
import Nagad from "../comporent/bnrPages/Nagad";
import Roket from "../comporent/bnrPages/Roket";
import PaymentSuccess from "../comporent/PaymentSuccess";


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
    },
    {
        path: "/payment-method/nagad",
        element: <Nagad />,
    },
    {
        path: "/payment-method/rocket",
        element: <Roket />,
    },
    {
        path: "/payment-success",
        element: <PaymentSuccess />,
    },
]);

export default router;


