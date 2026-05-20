import { Banner } from "@/components/home/Banner";
import Benefits from "@/components/home/Benefits";
import Categories from "@/components/home/Categories";
import Deals from "@/components/home/Deals";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Restaurants from "@/components/home/Restaurants";
import Team from "@/components/home/Team";

const Home = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Deals />
      <Categories />
      <Restaurants />
      <Banner />
      <Team />
      <Newsletter />
    </main>
  );
};

export default Home