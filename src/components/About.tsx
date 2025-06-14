
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground">
          Passionate about creating meaningful digital experiences
        </p>
      </div>
      <Card className="group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8 md:p-12">
          <div className="space-y-6 text-lg leading-relaxed">
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
    </div>
  );
};

export default About;
