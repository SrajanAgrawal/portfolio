"use client";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faTwitter, faGithub, faYoutube, } from '@fortawesome/free-brands-svg-icons';

// const SocialCard = ({ title, image, link }) => {
//     return (


//         <div>
//             <div
//                 className="rounded-t-xl relative h-10 w-10 md:h-36 md:w-36 bg-[#181818] bg-opacity-0 hover:bg-opacity-80 transition-all duration-500"
//                 style={{
//                     background: `url(${image})`,
//                     backgroundPosition: "center",
//                     backgroundSize: "contain", // Use 'contain' to fit the full image without cropping
//                     backgroundRepeat: "no-repeat" // Prevent repetition
//                 }}
//             >
//             </div>
//             <p className='hidden'> Hello </p>
//         </div>


//     );
// }

// const FollowMe = () => {
//     // Define brand colors
//     const linkedinColor = "#0077B5"; // LinkedIn blue
//     const youtubeColor = "#FF0000"; // YouTube red
//     const githubColor = "#FFF"; // GitHub black
//     return (
//         <section id="blogs" className='pt-16 pb-8'>
//             <div>
//                 <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//                     Social <span className="font-extrabold text-transparent text-4xl sm:text-5xl lg:text-8xl bg-clip-text text-center bg-gradient-to-r from-yellow-300 to-yellow-900"> Handles </span>
//                 </h2>
//                 <div className="h-45 flex justify-center md:flex-row items-center">
//                     {/* <SocialCard title="LinkedIn" image="/images/Socials/linkedin-removebg-preview.png" link="https://www.linkedin.com/in/srajan-agrawal/" />                   <SocialCard title="Github" image="/images/Socials/github-logo.png" link="https://www.github.com/SrajanAgrawal" />
//                     <SocialCard title="YouTube" image="/images/Socials/youtube-logo-removebg-preview.png" link="https://www.youtube.com/@srajanagrawal" />
//                     <SocialCard title="Medium" image="/images/Socials/medium-logo-removebg-preview.png" link="https://srajanarticles.medium.com/" /> */}
//                     <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: linkedinColor, padding: "0 2rem 0"}}/>
//                     <FontAwesomeIcon icon={faYoutube} size="3x" style={{ color: youtubeColor, padding: "0 2rem 0" }}/>
//                     <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: githubColor, padding: "0 2rem 0" }}/>

//                 </div>

//             </div>
//         </section>

//     );
// }

// export default FollowMe;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";``
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const SocialMediaIcon = ({ icon, text, color }) => {

    return (
        <div className="group flex items-center space-x-2 p-2 transition-transform transform scale-100 group-hover:scale-110">
            
            <FontAwesomeIcon icon={icon} size="3x" style={{ color }} />
            <motion.span
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hidden group-hover:block text-white bg-opacity-80 rounded-lg rounded-t text-center py-1"
                style={{
                    color: "white", 
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: "0 0 0.375rem 0.375rem", 
                    background: "#181818",
                    boxShadow: "0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25)"
                    
                }}
            >
                {text}
            </motion.span>
            
        </div>
    );
};

const FollowMe = () => {
    // Define brand colors
    const linkedinColor = "#0077B5"; // LinkedIn blue
    const youtubeColor = "#FF0000"; // YouTube red
    const githubColor = "#FFF"; // GitHub black
    return (
        <section id="blogs" className="pt-16 pb-8">
            <div>
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    Social <span className="font-extrabold text-transparent text-4xl sm:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900"> Handles </span>
                </h2>
                <div className="flex justify-center md:flex-row space-x-4">
                    <SocialMediaIcon icon={faLinkedin} text="LinkedIn" color={linkedinColor}/>
                    <SocialMediaIcon icon={faGithub} text="GitHub" color = {githubColor} />
                    <SocialMediaIcon icon={faYoutube} text="YouTube" color = {youtubeColor} />
                </div>
            </div>
        </section>
    );
};

export default FollowMe;

