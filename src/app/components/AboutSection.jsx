"use client";
import React from "react";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
const AboutSection = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("Skills");

  function handelTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  const TabData = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className="pl-4 list-disc">
          <li>HTML</li>
          <li>CSS</li>
          <li>NODE.Js</li>
          <li>JAVASCRIPT</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <div>I studied through online courses. and secandary shcool</div>
      ),
    },
    {
      title: "Experince",
      id: "Experince",
      content: <div>I have worked 2 years as a freelancer on internet</div>,
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="justify-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src={"Image/abouti.png"}
          alt="about me image"
          className="mt-20 rounded-xl"
          width={400}
          height={400}
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <div className="">
            <h2 className="text-orange-500  my-5 font-bold xl:text-4xl sm:text-2xl md:text-3xl lg:mb-4">
              About Me
            </h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row justify-start gap-4 mt-8">
             
              <TabButton
                selectTab={() => handelTabChange("Skills")}
                active={tab === "Skills"}
              >
                {""} Skills{""}
              </TabButton>
              
              <TabButton
                selectTab={() => handelTabChange("Education")}
                active={tab === "Education"}
              >
                {""}Education{""}
              </TabButton>
              <TabButton
                selectTab={() => handelTabChange("Experince")}
                active={tab === "Experince"}
              >
                {""}Experince{""}
              </TabButton>
            </div>
            <div className="mt-4 text-sm font-extralight lg:text-md">
              {TabData.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
