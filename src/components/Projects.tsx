import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const projects = [
    {
      title: "Memory Palace",
      description:
        "AI-powered web app that helps users master memory techniques using the loci method, integrating GPT-4o and DALL-E 3 for an immersive learning experience.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "OpenAI API",
      ],
      liveUrl: "https://memorypalace.vercel.app",
      githubUrl: "https://github.com/SofiaBargues/memory-palace",
      featured: false,
      image: "/uploads/39e48df3-76e2-43de-a3f0-74a0d1da9b35.png",
    },
    {
      title: "Frontend-30",
      description:
        "A comprehensive series of 30 coding challenges designed to help developers improve their skills in React, Tailwind CSS, and TypeScript through hands-on practice.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://frontend-30.vercel.app/",
      githubUrl: "https://github.com/SofiaBargues/frontend-30",
      featured: false,
      image: "/uploads/c407bb29-e3f1-41fb-8520-5041073a989c.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary  border-b-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects that showcase my skills and passion for building
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="border-2 border-border rounded-xl bg-card overflow-hidden"
            >
              {/* Project Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-betwee n">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors text-foreground">
                      {project.title}
                      {project.featured && (
                        <Badge
                          variant="secondary"
                          className="ml-2 rounded-xl border-2 border-border"
                        >
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs rounded-xl border-2 border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {/* Mostrar View Live solo si existe el liveUrl */}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      className="rounded-xl border-2 border-border"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-xl border-2 border-border"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
