// HeroSection.js
"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <motion.div 
      initial={{opacity : 0, scale: 0.5}} 
      animate={{opacity : 1, scale: 1}} 
      transition={{duration:0.5}}    
      className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-pink-700 to-orange-500">
              Hello, I'm <br />
            </span>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mousa",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "FrontEnd developer",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            {/* زر Hire Me */}
            <button className="px-6 py-3 mt-5 text-white transition-all duration-300 rounded-full bg-gradient-to-br from-blue-900 via-pink-700 to-orange-500 sm:w-fit mr-9 lg:mt-0 hover:from-blue-700 hover:via-pink-500 hover:to-orange-200">
              Hire me
            </button>

            {/* زر Download CV */}
            <button className="px-1 py-1 mt-5 mr-4 overflow-hidden text-white border border-white rounded-full sm:w-fit lg:mt-0 bg-gradient-to-r from-purple-950 via-pink-700 to-orange-500">
              <span className="rounded-full bg-[#121212] w-full h-full block px-3 py-2 hover:bg-[#252525] transition-all duration-300">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative">
            <Image
              src="/image/image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HeroSection;
