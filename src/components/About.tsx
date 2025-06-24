import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 px-4 bg-secondary  border-b-2">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border rounded-xl bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Hi! I'm Sofía.

I love learning new things and sharing what I learn online. You can follow my journey on LinkedIn.
            </p>

              <p className="text-left">I also enjoy doing fun coding challenges. 
⏳ These days, I'm solving one LeetCode problem every day live on Twitch and sharing some solutions on YouTube. 
✅ Last year, I redesigned 30 local business websites in 30 days using React and Tailwind. 
✅ I also finished 30 web projects in 30 days, following tutorials with React, Tailwind, Next.js, and TypeScript.</p>

              <p>
I love to learn by building. All my projects are open source on GitHub and show what I've learned so far.

I'm excited to keep growing and take everything I've learned to the next level!


            </p>

              <p></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;