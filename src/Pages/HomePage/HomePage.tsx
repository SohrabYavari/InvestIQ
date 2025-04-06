// Comps
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="divider"></div>
      <About />
    </div>
  );
};

export default HomePage;
