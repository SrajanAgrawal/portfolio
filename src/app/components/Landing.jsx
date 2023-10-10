"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="lg:py-16 px-8" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center md:justify-self-start order-2 sm:order-1"
        >
          <span className="font-extrabold text-transparent text-4xl sm:text-5xl lg:text-8xl bg-clip-text text-center bg-gradient-to-r from-yellow-300 to-yellow-900 ">
              Hello, I&apos;m{" "}
            </span>
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            
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
          </h1>

        
          <div className="sticky flex flex-col items-center sm:flex-row">
            <Link
              href="https://topmate.io/srajanagrawal"
              className=" sm:w-auto rounded-full bg-gradient-to-br from-yellow-300 to-yellow-900 hover:bg-black text-white mt-3 ml-3"
            >
              <span className="px-16 py-3 block gradient-to-br from-yellow-200 hover:bg-[#121212] hover:border hover:border-indigo-200 border-y-indigo-500 rounded-full">
                Book A Call
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1rHYL_ojcesLurfnMHN6RJJhxtiJiJh9e/view?usp=sharing"
              className="sm:w-auto rounded-full bg-gradient-to-br from-yellow-300 to-yellow-900 hover:bg-slate-800 text-white mt-3 ml-3"
            >
              <span className="px-16 py-3 block gradient-to-br from-yellow-200 hover:bg-[#121212] hover:border hover:border-indigo-200 border-y-indigo-500 rounded-full">
                Download CV
              </span>
            </Link>
          </div>




        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 order-1 sm:order-2"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/landing-image.png"
              alt="hero image"
              className="w-full h-full object-cover"
              // className="absolute inset-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              // layout="fill"
              width={500}
              height={500}
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Landing;