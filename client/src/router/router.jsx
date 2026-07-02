import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import LandingPage from "../pages/LandingPage";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";

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
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
