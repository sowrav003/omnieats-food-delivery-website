import Benefits from "@/components/home/Benefits";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";
import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Deals />
      <Categories />
    </main>
  );
};

export default Home