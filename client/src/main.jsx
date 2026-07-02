import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import router from "./router/router.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,

          style: {
            background: "#1d1d1d",
            color: "#fff",
            border: "1px solid #333",
          },

          success: {
            iconTheme: {
              primary: "#e10600",
              secondary: "#fff",
            },
          },
        }}
      />
    </CartProvider>
  </StrictMode>,
);
