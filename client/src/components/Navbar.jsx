import hondaLogo from "../assets/Honda_Logo.svg";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <img src={hondaLogo} alt="Honda" className={styles.logo} />
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
