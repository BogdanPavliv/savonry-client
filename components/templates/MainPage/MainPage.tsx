"use client";
import Hero from "@/components/modules/MainPage/Hero/Hero";
import NewGoods from "@/components/modules/MainPage/NewGoods";
import Advantages from "@/components/modules/MainPage/Advantages";
import BestsellerGoods from "@/components/modules/MainPage/BestsellerGoods";
import About from "@/components/modules/MainPage/About";
import Banner from "@/components/modules/Banner/Banner";

const MainPage = () => {
  return (
    <main className="main">
      <Hero />
      <NewGoods />
      <Advantages />
      <BestsellerGoods />
      <About />
      <Banner />
    </main>
  );
};

export default MainPage;
