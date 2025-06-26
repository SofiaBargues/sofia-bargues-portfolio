
"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Clock, CheckCircle, Mail, Github, Linkedin, Youtube, Twitch, MessageSquare } from "lucide-react";
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
              <span className="underline decoration-wavy decoration-muted">Coding</span>,{" "}
              <span className="font-bold">Playing</span>, and{" "}
              <span className="bg-muted px-2 py-1 rounded">Learning</span> Every Day
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
                . I love learning new things and sharing what I learn online. You can follow my journey on{" "}
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
                  <span className="underline decoration-wavy decoration-muted">fun coding challenges</span>:
                </p>

                <div className="relative pl-8">
                  {/* Timeline Line - Positioned to align with dots */}
                  <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-border"></div>

                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {/* Currently Working - Most Important */}
                    <div className="relative">
                      <div className="absolute -left-5 top-2 z-10 flex-shrink-0">
                        <div className="w-3 h-3 bg-primary border-2 border-primary rounded-full"></div>
                        <div className="absolute inset-0.5 w-2 h-2 bg-background rounded-full animate-pulse"></div>
                      </div>

                      <div className="bg-primary text-primary-foreground border-l-4 border-primary pl-4 pr-4 py-4 rounded-r-lg shadow-lg">
                        <div className="mb-2">
                          <span className="font-bold">Currently:</span>
                        </div>
                        <p className="text-base leading-7">
                          <Clock className="w-4 h-4 inline mr-2 animate-pulse" />
                          I'm solving one LeetCode problem every day, and I'm on day{" "}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="font-black text-primary bg-primary-foreground px-3 py-1 rounded-full cursor-help border-2 border-primary-foreground">
                                {dayOfYear}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Current streak: {dayOfYear} consecutive days! 🔥</p>
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
                    <div className="relative">
                      <div className="absolute -left-5 top-2 z-10 flex-shrink-0">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>

                      <div className="bg-secondary border-l-4 border-muted pl-4 pr-4 py-3 rounded-r-lg">
                        <div className="mb-2">
                          <span className="font-medium text-muted-foreground">Completed:</span>
                        </div>
                        <p className="text-base text-foreground leading-7">
                          <CheckCircle className="w-4 h-4 text-muted-foreground inline mr-2" />
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
                          in <span className="font-medium bg-muted px-2 py-1 rounded">30 days</span> using React and Tailwind.
                        </p>
                      </div>
                    </div>

                    {/* Completed Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-5 top-2 z-10 flex-shrink-0">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>

                      <div className="bg-secondary border-l-4 border-muted pl-4 pr-4 py-3 rounded-r-lg">
                        <div className="mb-2">
                          <span className="font-medium text-muted-foreground">Completed:</span>
                        </div>
                        <p className="text-base text-foreground leading-7">
                          <CheckCircle className="w-4 h-4 text-muted-foreground inline mr-2" />
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
                              <p>Using React, Tailwind, Next.js, and TypeScript</p>
                            </TooltipContent>
                          </Tooltip>{" "}
                          in <span className="font-medium bg-muted px-2 py-1 rounded">30 days</span>, following{" "}
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
              <div className="border-t border-border pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  I love to learn by{" "}
                  <span className="font-bold underline decoration-wavy decoration-muted">building</span>. My{" "}
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
                  are <span className="bg-muted px-2 py-1 rounded font-medium">open source</span> on{" "}
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
                  and show what I've learned so far. I'm <span className="font-bold text-primary">excited</span> to keep
                  growing and take everything I've learned to the{" "}
                  <span className="underline decoration-wavy decoration-muted-foreground font-bold">next level</span>!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Let's <span className="underline decoration-wavy decoration-muted">Connect</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Looking forward to <span className="font-bold bg-muted px-2 py-1 rounded">job offers</span>,{" "}
              <span className="underline decoration-2 decoration-muted">helping others</span>, and{" "}
              <span className="font-bold">coding talks</span>!
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:sofia@example.com" },
                { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/SofiaBargues" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/sofia-bargues/" },
                { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "https://www.youtube.com/@sofiabargues" },
                { icon: <Twitch className="w-5 h-5" />, label: "Twitch", href: "https://www.twitch.tv/sofiabargues" },
                { icon: <MessageSquare className="w-5 h-5" />, label: "Discord", href: "#" },
              ].map((social, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all duration-200 hover:scale-105"
                    >
                      {social.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on {social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default About;
