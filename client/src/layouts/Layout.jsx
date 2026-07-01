import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main className="main-content">
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}
