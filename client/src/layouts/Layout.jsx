import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  <>
    <Navbar className="navbar" />

    <main className="main-content">
      <Outlet />
    </main>

    <footer></footer>
  </>;
}
