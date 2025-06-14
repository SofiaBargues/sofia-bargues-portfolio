
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Git",
    "Vercel"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern technologies I use to build exceptional web experiences
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-base font-semibold rounded-full bg-secondary/50 text-foreground shadow-none"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
