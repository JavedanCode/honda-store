import Store from "../components/Store";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToStore) {
      document.getElementById("store")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <>
      <Hero />

      <Store />
    </>
  );
}
