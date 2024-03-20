import React from "react";
import { Hero } from "./_component/hero";
import Intro from "./_component/intro";
import Experiences from "./_component/experiences";

const Home = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Experiences />
    </main>
  );
};

export default Home;
