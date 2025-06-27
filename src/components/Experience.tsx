import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer & Designer",
      company: "Women Coding Community",
      period: "May 2024 - Present",
      responsibilities: [
        "Migrated 15+ UI components from legacy website to Figma, reducing future development time by 40%.",
        "Coordinated task prioritization across 4-member team, delivering project on schedule with excellent stakeholder feedback.",
        "Tracked progress via public board with regular updates, maintaining 100% alignment with project requirements.",
      ],
      technologies: ["Figma", "UI/UX Design", "MUI", "React", "TypeScript"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary border-b-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and contributions to the tech community
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={experience.company}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="border-2 border-border rounded-xl bg-card overflow-hidden animate-fade-in"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 text-foreground">
                      {experience.title}
                    </CardTitle>
                    <div className="text-lg font-semibold text-primary mb-2">
                      {experience.company}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-foreground leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs rounded-xl border-2 border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
