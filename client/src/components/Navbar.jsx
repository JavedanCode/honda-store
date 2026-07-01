import hondaLogo from "../assets/Honda_Logo.svg";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ variant = "transparent" }) {
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
              <a href="store">Store</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
