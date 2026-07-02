import hondaLogo from "../assets/Honda_Logo.svg";
import styles from "../styles/Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar({ variant = "transparent" }) {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  function handleStoreClick() {
    if (location.pathname === "/") {
      document.getElementById("store")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { scrollToStore: true } });
    }
  }
  return (
    <>
      <header
        className={`${styles.header} ${
          variant === "light" ? styles.light : styles.transparent
        }`}
      >
        <img
          src={hondaLogo}
          alt="Honda"
          className={`${styles.logo} ${
            variant === "light" ? styles.logoLight : styles.logoDark
          }`}
        />
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button className={styles.navButton} onClick={handleStoreClick}>
                Store
              </button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart {totalItems}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
