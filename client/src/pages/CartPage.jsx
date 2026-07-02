import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import CartItem from "../components/CartItem";
import CheckoutPanel from "../components/CheckoutPanel";
import Navbar from "../components/Navbar";

import styles from "../styles/CartPage.module.css";

export default function CartPage() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar variant="light" />
        <main className={styles.emptyCart}>
          <h1>Your Cart is Empty</h1>

          <p>Looks like you haven't added any Honda motorcycles yet.</p>

          <Link to="/" className={styles.shopButton}>
            Continue Shopping
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar variant="light" />
      <main className={styles.cartPage}>
        <section className={styles.cartItems}>
          <h1>Shopping Cart</h1>

          {cartItems.map((item) => (
            <CartItem key={item.motorcycle.slug} item={item} />
          ))}
        </section>

        <CheckoutPanel />
      </main>
    </>
  );
}
