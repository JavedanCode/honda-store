import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(motorcycle, quantity) {
    const existingItem = cartItems.find(
      (item) => item.motorcycle.slug === motorcycle.slug,
    );

    if (existingItem) {
      updateQuantity(motorcycle.slug, existingItem.quantity + quantity);
      return;
    }

    setCartItems((currentItems) => [
      ...currentItems,
      {
        motorcycle,
        quantity,
      },
    ]);
  }

  function removeFromCart(slug) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.motorcycle.slug !== slug),
    );
  }

  function updateQuantity(slug, quantity) {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.motorcycle.slug === slug ? { ...item, quantity } : item,
      ),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  function getCartItem(slug) {
    return cartItems.find((item) => item.motorcycle.slug === slug);
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.motorcycle.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
