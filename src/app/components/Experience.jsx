"use client";
import React, { useRef } from 'react';

import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    
    return (
        <li ref={ref} className='text-black my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-between bg-gradient-to-r from-yellow-300 via-white to-yellow-900 p-4 rounded-lg shadow-lg'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-xl sm:text-2xl'>
                    {position}&nbsp;
                    <a href={companyLink} target='_blank' className='text-yellow-900 capitalize'>{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-xs '>
                    {work}
                </p>
            </motion.div>
        </li>
    );

}

const Experience = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll(
        {
            // container: ref,
            taraget: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <section className='bg-white mt-16 mb-8 py-8 overflow-hidden' id='resume' style={{
            background: `url('https://ouch-cdn2.icons8.com/E566LHM6xxXUdB6rkuCnPIPd9M9xD5hbVN8vxoO7Y0M/rs:fit:368:299/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzc1/LzYyYThlZmJkLTVi/OGItNGViYi05ZTk1/LTJlZTdiMDI4N2Yx/OS5wbmc.png')`,
            backgroundPosition: "center",
            backgroundSize: "contain", // Use 'contain' to fit the full image without cropping
            backgroundRepeat: "no-repeat",
            // Prevent repetition
        }}>
            <div className='bg-transparent'>
                <h2 className='font-bold mb-32 w-full text-center text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900'>
                    Experience
                </h2>
                <div ref={ref} className='w-[75%] mx-auto relative'>

                    <motion.div
                        style={{ scaleY: scrollYProgress }} className="absolute -left-1 md:left-9 top-0 w-[4px] h-full  bg-white md:bg-black  origin-top" />

                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        <Details
                            position="Software Engineer Intern" company="@Microsoft" companyLink="www.microsoft.com" time="April 2023 - June 2023" address="Bengaluru" work="• Achieved 30% faster response time and 20% reduced server resource usage for Azure Logic Apps through 2-month automated performance testing at Microsoft, Bengaluru.
                    
                    • Proficient in C#, .NET, ReactJs, Git Extension, and Visual Studio Extension for timely, functionality-rich product re-
                    leases.
                    • Managed API testing with Postman and tracked projects via Azure DevOps, boosting team efficiency by 15
                    • Elevated Logic Apps’ performance with integrated ReactJs components.
                    • Facilitated seamless collaboration and version control using Git within the team."/>
                        <Details
                            position="Microsoft Engage'22" company="" companyLink="www.microsoft.com" time="April 2022 - June 2022" address="Mentee" work="In Microsoft Engage 2022, I had a project to finish in just one month. I completed it and got selected. I also navigated through coding rounds and resume screening, and I've shared the whole journey on my blog for you to Check out!" />
                        <Details
                            position="UiPath Student Developer Champion" company="" companyLink="www.uipath.com" time="October 2022 - August 2023" address="Community Lead" work="I substantially increased engagement within the UiPath Student Developer community by an impressive 50%. Additionally, I organized and led successful workshops that proved beneficial to more than 80 students. Moreover, I had the privilege of serving as a global speaker, addressing audiences from over 8 countries, all contributing to the empowerment of individuals in the tech sphere on a global scale." />
                        <Details
                            position="Open Source Lead" company="@GDSC" companyLink="https://gdsc.community.dev/" time="July 2022 - July 2023" address="Core Team Player" work="As the Open Source Lead at my college, I led efforts to boost open-source engagement, fostering a vibrant community. This involved delivering transformative Git sessions and orchestrating impactful Hacktoberfest workshops to encourage collaborative contributions." />
                        <Details
                            position="Google Cloud Facilitator" company="@Google Cloud" companyLink="https://cloud.google.com/" time="November 2022 - February 2023" address="" work="I took the helm and successfully led a Cloud Campaign at my college, which involved engaging with over 35 students. The campaign was a well-executed endeavor that effectively highlighted the key concepts and practical applications of cloud computing. To ensure its success, I fostered collaboration among students, promoting active participation and facilitating knowledge sharing throughout the entire event." />


                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
