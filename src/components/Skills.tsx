
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  noHeader?: boolean;
}

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

const Skills = ({ noHeader }: SkillsProps) => {
  return (
    <div className="h-full flex flex-col">
      {!noHeader && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technologies & Tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Modern technologies I use to build exceptional web experiences
          </p>
        </div>
      )}
      <div className="bg-background/90 border border-border rounded-lg shadow-sm px-6 py-8 flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 lg:hidden">
          Technologies & Tools
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-base font-semibold rounded-full bg-secondary/60 text-foreground shadow-none border"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
