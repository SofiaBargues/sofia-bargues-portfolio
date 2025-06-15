import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Memory Palace",
    description: "AI-powered web app that helps users master memory techniques using the loci method, integrating GPT-4o and DALL-E 3 for an immersive learning experience.",
    technologies: ["React", "TypeScript", "AI Integration", "OpenAI API"],
    liveUrl: "https://memorypalace.vercel.app",
    githubUrl: "https://github.com/SofiaBargues/memory-palace",
    featured: true
  }, {
    title: "Frontend-30",
    description: "A comprehensive series of 30 coding challenges designed to help developers improve their skills in React, Tailwind CSS, and TypeScript through hands-on practice.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Educational Content"],
    githubUrl: "https://github.com/SofiaBargues/frontend-30",
    featured: true
  }];
  return <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={project.title} style={{
          animationDelay: `${index * 0.2}s`
        }} className="">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                      {project.featured && <Badge variant="secondary" className="ml-2">Featured</Badge>}
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
                    {project.technologies.map(tech => <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                      </a>
                    </Button>}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Projects;