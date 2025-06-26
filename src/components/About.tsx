"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

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
      <section id="about" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              Coding, Playing, and Learning Every Day
            </p>
          </div>

          {/* Main Content Card */}
          <Card className="group transition-all duration-300 border-2 border-gray-200 rounded-xl bg-white mb-16 shadow-sm">
            <CardContent className="p-8 md:p-12">
              {/* Introduction */}
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Hi! I'm{" "}
                <span className="text-gray-900 relative">
                  <span className="relative z-10  text-lg leading-relaxed text-gray-700 mb-8">
                    Sofia
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,1 50,4 T100,4"
                      stroke="#FCD34D"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                . I love learning new things and{" "}
                <span className="relative">
                  <span className="relative z-10">
                    sharing what I learn online
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,6 50,3 T100,5"
                      stroke="#FCD34D"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .{" "}
                <span className="relative">
                  <span className="relative z-10">
                    You can follow my journey on
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 6"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,3 L100,3"
                      stroke="#60A5FA"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                <a
                  href="https://www.linkedin.com/in/sofia-bargues/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 relative"
                >
                  <span className="relative z-10 underline">LinkedIn</span>
                </a>
                .
              </p>

              {/* Coding Challenges Section */}
              <div className="mb-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  I enjoy doing{" "}
                  <span className="relative">
                    <span className="relative z-10">fun coding challenges</span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,4 Q25,6 50,3 T100,5"
                        stroke="#f27875"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  :
                </p>

                {/* Clean Timeline Items */}
                <div className="space-y-6">
                  {/* Current Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-7">
                      I'm solving{" "}
                      <span className="relative bg-orange-200 px-1 rounded">
                        <span className="relative z-10">
                          one LeetCode problem every day
                        </span>
                      </span>
                      , currently on day{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-orange-600 bg-orange-100 px-2 py-1 rounded cursor-help border-2 border-orange-300">
                            {dayOfYear}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Consecutive days! 🔥</p>
                        </TooltipContent>
                      </Tooltip>{" "}
                      out of 365, live on{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://www.twitch.tv/sofiabargues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 underline relative"
                          >
                            <span className="relative z-10">Twitch</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Watch me solve problems live!</p>
                        </TooltipContent>
                      </Tooltip>{" "}
                      and I'm sharing some of the solutions on{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://www.youtube.com/@sofiabargues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 underline decoration-red-200 hover:decoration-red-400 transition-colors"
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

                  {/* Completed Item 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-7">
                      Last year, I redesigned{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://days-of-code.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 bg-green-200 px-2 py-1 rounded cursor-help relative"
                          >
                            <span className="relative z-10">
                              30 local business websites
                            </span>
                            <svg
                              className="absolute -bottom-1 left-0 w-full h-2"
                              viewBox="0 0 100 6"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0,3 L100,3"
                                stroke="#26e600"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Built with React and Tailwind CSS</p>
                        </TooltipContent>
                      </Tooltip>{" "}
                      in{" "}
                      <span className="relative">
                        <span className="relative z-10">30 days.</span>
                        <svg
                          className="absolute -bottom-2 left-0 w-full h-3"
                          viewBox="0 0 100 8"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,4 Q50,1 100,4"
                            stroke="#26e600"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>

                  {/* Completed Item 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-7">
                      I also finished{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://days-of-code.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 bg-blue-100 px-2 py-1 rounded cursor-help relative"
                          >
                            <span className="relative z-10">
                              30 web projects
                            </span>
                            <svg
                              className="absolute -bottom-1 left-0 w-full h-2"
                              viewBox="0 0 100 6"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0,3 L100,3"
                                stroke="#3B82F6"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Using React, Tailwind, Next.js, and TypeScript</p>
                        </TooltipContent>
                      </Tooltip>{" "}
                      in{" "}
                      <span className="relative">
                        <span className="relative z-10">30 days</span>
                        <svg
                          className="absolute -bottom-2 left-0 w-full h-3"
                          viewBox="0 0 100 8"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,4 Q50,1 100,4"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      , following tutorials.
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Section */}
              <p className="text-lg leading-relaxed text-gray-700">
                I love to learn by{" "}
                <span className="relative">
                  <span className="relative z-10">building</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,6 50,3 T100,5"
                      stroke="#FCD34D"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                . My <span className="text-gray-900">{repoCount} repos </span>
                are on{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/SofiaBargues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 underline decoration-gray-300 hover:decoration-gray-500 transition-colors"
                    >
                      GitHub
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out my code and projects</p>
                  </TooltipContent>
                </Tooltip>{" "}
                <span className="relative">
                  <span className="relative z-10">
                    show what I've learned so far
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 6"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,3 L100,3"
                      stroke="#A855F7"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
                <br /> I'm <span className="text-gray-900">
                  excited
                </span> to{" "}
                <span className="relative">
                  <span className="relative z-10">
                    keep growing and take everything I've learned to the next
                    level
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,6 50,3 T100,5"
                      stroke="#10B981"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
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
