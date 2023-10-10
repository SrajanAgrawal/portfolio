import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
// import FollowMe from "./components/FollowMe";
import FollowMe from "./components/FollowMe";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-20 mx-auto">
        <Landing />
        {/* <HeroSection /> */}
        <FollowMe />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        
        <EmailSection />
        
      </div>
      <Footer />
    </main>
  );
}
