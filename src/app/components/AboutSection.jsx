"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Language:</b> C, C++, C#, Javascript, HTML, CSS </li>
        <li><b>Framework:</b> Node.js, React.js, Django</li>
        <li><b>Databases:</b> MongoDB, Azure Devops</li>
        <li><b>IT Constructs:</b> DSA, OS, CN, OOPS, DBMS</li>
        <li><b>Tools:</b> Visual Studio, GitHub, Figma, Canva, Latex</li>
        <li><b>More:</b> UiPath, Cloud Computing, Open-Source, Public Speaking</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">Dr. Ambedkar Institute of technology for handicapped, Kanpur - B.Tech(CSE)</b> <br/> 2020-2024 || 8.5 SGPA </li>
        <li><b className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4"> Shri Ram Chandra Agrawal Girls Inter College, Hathras</b> <br /> 12th || 88.3% </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Course On Computer Concepts (CCC) || Cleared</li>
        <li>Figma For UX Design</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-8 px-4 xl:gap-16 sm:py-16 xl:px-16 h-1/2">
        <Image src="/images/about-section.png" width={500} height={400} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          {"Hi, I'm Srajan Agrawal, a tech enthusiast and B.Tech student. I'm on a journey of discovery and growth in the world of technology. As a full stack web developer, I'm passionate about crafting interactive and responsive web applications using JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I'm a strong advocate for collaboration and believe in the magic of sharing knowledge. If you're ever looking to discuss tech-related ideas or need assistance, feel free to reach out anytime. Let's connect and explore the exciting world of technology together!"}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
