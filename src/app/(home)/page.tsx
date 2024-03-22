import React from "react";
import { Hero } from "./_component/hero";
import Intro from "./_component/intro";
import Experiences from "./_component/experiences";
import TechStack from "./_component/tech-stack";
import Contact from "./_component/contact";

const Home = () => {
  return (
    <main className="px-3">
      <Hero />
      <Intro />
      <Experiences />
      <TechStack />
      <Contact />
    </main>
  );
};

export default Home;
