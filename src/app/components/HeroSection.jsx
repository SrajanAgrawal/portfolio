"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 flex justify-center flex-col items-center" style={{
      backgroundImage: "url('/images/hero-image2.png')", // Replace with your image path or URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    }}>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" pl-6 col-span-8 place-self-center text-center"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-400 sticky">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div>
            <TypeAnimation
              sequence={[
                "Srajan Agrawal",
                1000,
                "Software Engineer",
                1000,
                " Web Developer",
                1000,
                "Coder",
                1000,
                " UI/UX Designer",
                1000,
                " Public Speaker",
                1000,
                "YouTuber",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
          </h1>
          
          
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div> */}
      </div>
      
      <div className="relative flex flex-col sm:flex-row  ">
            
            <Link
              href="https://topmate.io/srajanagrawal"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-black text-white mt-3 ml-3"
            >
              <span className="block gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#121212] rounded-full px-5 py-2">
                Book A Call
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1rHYL_ojcesLurfnMHN6RJJhxtiJiJh9e/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 ml-3"
            >
              <span className="block gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
    </section>
  );
};

export default HeroSection;
