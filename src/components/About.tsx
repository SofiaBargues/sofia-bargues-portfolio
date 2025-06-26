"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Clock,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
  Youtube,
  Twitch,
  MessageSquare,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const About = () => {
  const [repoCount, setRepoCount] = useState(93);
  const [dayOfYear, setDayOfYear] = useState(177);

  useEffect(() => {
    fetch("https://api.github.com/users/SofiaBargues")
      .then((response) => response.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch((error) => console.error("Error fetching repo count:", error));

    // Calculate the day of the year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = Number(now) - Number(start);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    setDayOfYear(day);
  }, []);

  return (
    <TooltipProvider>
      <section id="about" className="py-20 px-4 bg-secondary border-b-2">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="underline decoration-wavy decoration-muted">
                Coding
              </span>
              , <span className="font-bold">Playing</span>, and{" "}
              <span className="bg-muted px-2 py-1 rounded">Learning</span> Every
              Day
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border rounded-xl bg-card mb-16">
            <CardContent className="p-8 md:p-12">
              {/* Introduction */}
              <p className="text-lg leading-relaxed text-foreground mb-8">
                Hi! I'm{" "}
                <span className="font-black text-primary bg-secondary px-2 py-1 rounded">
                  Sofia
                </span>
                . I love learning new things and sharing what I learn online.
                You can follow my journey on{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/sofia-bargues/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold underline decoration-2 decoration-primary hover:decoration-muted-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow my professional journey</p>
                  </TooltipContent>
                </Tooltip>
                .
              </p>

              {/* Timeline Section */}
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  I also enjoy doing{" "}
                  <span className="underline decoration-wavy decoration-muted">
                    fun coding challenges
                  </span>
                  :
                </p>

                <div className="relative ml-6">
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {/* Currently Working - Most Important */}
                    <div className="relative pl-8">
                      <div className="absolute -left-4 top-2 z-10 flex-shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="bg-muted text-foreground pl-4 pr-4 py-4 rounded-lg shadow-lg">
                        <p className="text-base leading-7">
                          I'm solving one LeetCode problem every day, and I'm on
                          day{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="font-black text-primary bg-secondary px-3 py-1 rounded-full cursor-help border-2 border-primary">
                                {dayOfYear}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Current streak: {dayOfYear} consecutive days! 🔥
                              </p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          of 365 live on{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href="https://www.twitch.tv/sofiabargues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold underline decoration-2 hover:decoration-muted transition-colors"
                              >
                                Twitch
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Watch me solve problems live!</p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          and sharing some solutions on{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href="https://www.youtube.com/@sofiabargues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold underline decoration-2 hover:decoration-muted transition-colors"
                              >
                                YouTube
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Check out my coding tutorials</p>
                            </TooltipContent>
                          </Tooltip>
                          .
                        </p>
                      </div>
                    </div>

                    {/* Completed Item 1 */}
                    <div className="relative pl-8">
                      <div className="absolute -left-4 top-2 z-10 flex-shrink-0">
                        <div className="w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="bg-secondary pl-4 pr-4 py-3 rounded-lg">
                        <p className="text-base text-foreground leading-7">
                          Last year, I redesigned{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href="https://30-days-30-redesign.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-primary bg-muted px-2 py-1 rounded cursor-help underline decoration-wavy decoration-muted-foreground"
                              >
                                30 local business websites
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Built with React and Tailwind CSS</p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          in{" "}
                          <span className="font-medium bg-muted px-2 py-1 rounded">
                            30 days
                          </span>{" "}
                          using React and Tailwind.
                        </p>
                      </div>
                    </div>

                    {/* Completed Item 2 */}
                    <div className="relative pl-8">
                      <div className="absolute -left-4 top-2 z-10 flex-shrink-0">
                        <div className="w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="bg-secondary pl-4 pr-4 py-3 rounded-lg">
                        <p className="text-base text-foreground leading-7">
                          I also finished{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href="https://days-of-code.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-primary bg-muted px-2 py-1 rounded cursor-help underline decoration-wavy decoration-muted-foreground"
                              >
                                30 web projects
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Using React, Tailwind, Next.js, and TypeScript
                              </p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          in{" "}
                          <span className="font-medium bg-muted px-2 py-1 rounded">
                            30 days
                          </span>
                          , following{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href="https://30projects30days.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-bold underline decoration-2 decoration-primary hover:decoration-muted-foreground transition-colors"
                              >
                                tutorials
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Various online coding tutorials and courses</p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          with React, Tailwind, Next.js, and TypeScript.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Section */}
              <p className="text-lg leading-relaxed text-foreground">
                I love to learn by{" "}
                <span className="font-bold underline decoration-wavy decoration-muted">
                  building
                </span>
                . My{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="font-black text-primary bg-muted px-3 py-1 rounded-full cursor-help border border-border">
                      {repoCount} repos
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>All open source and available to explore</p>
                  </TooltipContent>
                </Tooltip>{" "}
                are{" "}
                <span className="bg-muted px-2 py-1 rounded font-medium">
                  open source
                </span>{" "}
                on{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/SofiaBargues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold underline decoration-2 decoration-primary hover:decoration-muted-foreground transition-colors"
                    >
                      GitHub
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out my code and projects</p>
                  </TooltipContent>
                </Tooltip>{" "}
                and show what I've learned so far. I'm{" "}
                <span className="font-bold text-primary">excited</span> to keep
                growing and take everything I've learned to the{" "}
                <span className="underline decoration-wavy decoration-muted-foreground font-bold">
                  next level
                </span>
                !
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default About;
