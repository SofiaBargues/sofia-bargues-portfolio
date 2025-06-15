
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube } from "lucide-react";

const Hero = () => {
  // Scroll to Projects section handler
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Nuevo: Scroll to Contact section handler
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4">
            Frontend Developer
          </Badge>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent py-[7px] md:text-6xl">
            Sofia Bargues
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about sharing my learning, tech journey, and open-source projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="transition-all duration-300 hover:scale-105"
            onClick={handleScrollToProjects}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="transition-all duration-300 hover:scale-105"
            onClick={handleScrollToContact}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/SofiaBargues"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://uk.linkedin.com/in/sofia-bargues"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@sofiabargues"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
