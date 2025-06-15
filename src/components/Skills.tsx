import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      description: "Building modern user interfaces"
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "Type-safe JavaScript development"
    },
    {
      name: "Next.js",
      icon: "▲",
      description: "Full-stack React framework"
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "Utility-first CSS framework"
    },
    {
      name: "JavaScript",
      icon: "🟨",
      description: "Core web development language"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend JavaScript runtime"
    },
    {
      name: "Git",
      icon: "📦",
      description: "Version control system"
    },
    {
      name: "Vercel",
      icon: "🔺",
      description: "Deployment and hosting platform"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary border-2 border-border rounded-2xl">
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
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left border-2 border-border rounded-xl bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
