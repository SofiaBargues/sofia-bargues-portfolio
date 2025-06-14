
import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  noHeader?: boolean;
}

const About = ({ noHeader }: AboutProps) => {
  return (
    <Card className="h-full shadow-sm border border-border bg-background/90">
      <CardContent className="p-6 md:p-10 h-full flex flex-col justify-center">
        {!noHeader && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Passionate about creating meaningful digital experiences
            </p>
          </div>
        )}
        <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground">
          <p>
            I'm a frontend web developer based in Croydon, England, with a passion for building 
            modern, interactive web applications. My journey in tech is driven by curiosity and 
            a commitment to continuous learning.
          </p>
          <p>
            As an active member of the London tech community, I regularly attend conferences like 
            React Advanced and contribute to open-source projects. I believe in the power of 
            education and knowledge sharing, which led me to create projects like{" "}
            <span className="font-semibold text-primary">Memory Palace</span> and{" "}
            <span className="font-semibold text-primary">frontend-30</span>.
          </p>
          <p>
            Beyond coding, I create educational content on YouTube, sharing programming tutorials 
            and problem-solving walkthroughs. I'm particularly passionate about JavaScript, 
            algorithm challenges, and helping other developers grow their skills.
          </p>
          <p>
            My approach to development focuses on creating sustainable, well-crafted solutions 
            that provide real value to users. I'm always excited to collaborate on projects 
            that challenge me to learn and grow.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
