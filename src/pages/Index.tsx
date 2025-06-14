import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProfileSections from "@/components/ProfileSections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProfileSections />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
