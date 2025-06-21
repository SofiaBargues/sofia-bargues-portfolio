
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  FileCode, 
  TriangleRight, 
  Palette, 
  Braces, 
  Server, 
  GitBranch, 
  Zap 
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: Code2,
      description: "Building modern user interfaces"
    },
    {
      name: "TypeScript",
      icon: FileCode,
      description: "Type-safe JavaScript development"
    },
    {
      name: "Next.js",
      icon: TriangleRight,
      description: "Full-stack React framework"
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework"
    },
    {
      name: "JavaScript",
      icon: Braces,
      description: "Core web development language"
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Backend JavaScript runtime"
    },
    {
      name: "Git",
      icon: GitBranch,
      description: "Version control system"
    },
    {
      name: "Vercel",
      icon: Zap,
      description: "Deployment and hosting platform"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 border-b-2 bg-secondary ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technologies & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern technologies I use to build exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left border-2 border-border rounded-xl bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <IconComponent size={32} className="text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
