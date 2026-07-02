import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import LandingPage from "../pages/LandingPage";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "bike/:slug",
        element: <DetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
