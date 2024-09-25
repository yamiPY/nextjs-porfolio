// Home.js
import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
function Home() {
  return (
    <>
      <main className="flex flex-col bg-[#121212] min-h-screen ">
        <NavBar />
        <div className="container px-12 py-4 mx-auto mt-24">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectSection />
          <hr className=" mt-20 border-orange-500"></hr>
          <EmailSection />
        </div>
      </main>
    </>
  );
}

export default Home;
