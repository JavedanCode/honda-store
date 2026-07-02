import { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "../styles/CheckoutPanel.module.css";

export default function CheckoutPanel() {
  const { totalItems, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    payment: "card",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckout(e) {
    e.preventDefault();

    toast.success("Thank you! Your order has been placed.");

    clearCart();
  }

  return (
    <aside className={styles.checkout}>
      <h2>Checkout</h2>

      <div className={styles.summary}>
        <div>
          <span>Total Items</span>
          <strong>{totalItems}</strong>
        </div>

        <div>
          <span>Total Price</span>
          <strong>${totalPrice.toLocaleString()}</strong>
        </div>
      </div>

      <form onSubmit={handleCheckout} className={styles.form}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <select name="payment" value={form.payment} onChange={handleChange}>
          <option value="card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank">Bank Transfer</option>
        </select>

        <button type="submit">Complete Purchase</button>
      </form>
    </aside>
  );
}
