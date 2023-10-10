"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Face Authentication System",
    description: "I engineered a user-friendly system that enables individuals to register their faces using a webcam. This technology not only facilitates secure and convenient logins through facial recognition but also empowers users to safeguard their confidential data once logged in. It represents a significant advancement in data protection and user privacy.",
    image: "/images/projects/Frame1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SrajanAgrawal/FAuth",
    previewUrl: "https://www.youtube.com/watch?v=FHChUpH-NI8",
  },
  {
    id: 2,
    title: "To-Do List Application",
    description: "Hey there! Check out my cool web app for managing daily tasks. It's super handy because it saves your tasks securely, and it looks really nice too! You can use it on your computer or phone because it's fully responsive. Tech stack: HTML, CSS, JavaScript.",
    image: "/images/projects/Frame2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SrajanAgrawal/MYTODOLIST",
    previewUrl: "https://srajanagrawal.github.io/MYTODOLIST/",
  },
  
  {
    id: 3,
    title: "Social Media Integration",
    description: "Developed a compact web application allowing convenient sign-in via popular social platforms like Google and Facebook. Created using HTML, CSS, JavaScript, and APIs, with integration of Google and Facebook authentication.",
    image: "/images/projects/Frame3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SrajanAgrawal/SocialMediaIntegration",
    previewUrl: "https://srajanagrawal.github.io/SocialMediaIntegration/",
  },
  
  {
    id: 4,
    title: "ChatBot || Dialogflow",
    description: "Using Google Cloud, I created a cool web interface with React. It talks smoothly with a chatbot through Kommunicate, making it easy for users to chat. But wait, there's more! I'm working on making it even cooler with new features. Stay tuned for updates that will make this project even better!",
    image: "/images/projects/Frame4.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/SrajanAgrawal/ChatBot-DialogFlow-React-Kommunicate",
    previewUrl: "https://chat-bot-dialog-flow-react-kommunicate-5mhil80oz-srajanagrawal.vercel.app/",
  },
  /*
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }, */
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
