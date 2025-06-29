import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen gap-4 ">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
