import heroBackground from "../assets/hero_background.jpg";

export default function Hero() {
  return (
    <>
      <img className="hero-background-img" src={heroBackground} alt="" />
      <p className="hero-quote">Ignite your journey with Honda</p>
      <button className="btn explore-btn">{`[Explore Collection]`}</button>
    </>
  );
}
