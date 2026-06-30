import hondaLogo from "../assets/Honda_Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <img src={hondaLogo} alt="Honda" width={200} />
        <nav>
          <ul>
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
