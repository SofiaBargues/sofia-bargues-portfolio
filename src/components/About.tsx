import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
const About = () => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/SofiaBargues")
      .then((response) => response.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch((error) => console.error("Error fetching repo count:", error));
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-secondary  border-b-2">
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
              <p>
                Hi! I’m Sofía. I love learning new things and sharing what I
                learn online. You can follow my journey on{" "}
                <a
                  href="https://www.linkedin.com/in/sofia-bargues/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  LinkedIn
                </a>
                .
              </p>

              <p>
                I also enjoy doing fun coding challenges:
                <br />⏳ These days, I’m solving one LeetCode problem every day
                live on{" "}
                <a
                  href="https://www.twitch.tv/sofiabargues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Twitch
                </a>{" "}
                and sharing some solutions on{" "}
                <a
                  href="https://www.youtube.com/@sofiabargues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  YouTube
                </a>
                .
                <br />✅ Last year, I{" "}
                <a
                  href="https://30-days-30-redesign.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  redesigned 30 local business websites
                </a>{" "}
                in 30 days using React and Tailwind.
                <br />✅ I also finished{" "}
                <a
                  href="https://days-of-code.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  30 web projects in 30 days
                </a>
                , following{" "}
                <a
                  href="https://30projects30days.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  tutorials
                </a>{" "}
                with React, Tailwind, Next.js, and TypeScript.
              </p>

              <p>
                I love to learn by building. My{" "}
                <span className="font-bold  ">{repoCount}</span> repos are open
                source on{" "}
                <a
                  href="https://github.com/SofiaBargues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  GitHub
                </a>{" "}
                and show what I’ve learned so far. I'm excited to keep growing
                and take everything I’ve learned to the next level!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default About;
