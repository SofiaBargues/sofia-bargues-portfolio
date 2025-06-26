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
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch((err) => console.error("Error fetching repo count:", err));

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDayOfYear(day);
  }, []);

  return (
    <TooltipProvider>
      <section id="about" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              Coding, Playing, and Learning Every Day
            </p>
          </div>

          <Card className="border-2 border-gray-200 rounded-xl bg-white mb-16 shadow-sm">
            <CardContent className="p-8 md:p-12">
              {/* Intro */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hi! I'm <Highlight text="Sofia" color="#FCD34D" />. I love
                learning new things and{" "}
                <Highlight text="sharing what I learn online" color="#FCD34D" />
                . You can follow my journey on{" "}
                <a
                  href="https://www.linkedin.com/in/sofia-bargues/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  LinkedIn
                </a>
                .
              </p>

              {/* Challenges */}
              <div className="mb-8 space-y-6">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I enjoy doing{" "}
                  <Highlight text="fun coding challenges" color="#f27875" />:
                </p>

                {/* LeetCode */}
                <TimelineItem>
                  I'm solving{" "}
                  <span className="bg-orange-200 px-1 rounded">
                    one LeetCode problem every day
                  </span>
                  , currently on day{" "}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className=" text-gray-700 bg-orange-200 px-1 rounded cursor-help">
                        {dayOfYear}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Consecutive days! 🔥</p>
                    </TooltipContent>
                  </Tooltip>{" "}
                  out of 365, live on{" "}
                  <ExternalLink
                    href="https://www.twitch.tv/sofiabargues"
                    color="purple"
                    tooltip="Watch me solve problems live!"
                  >
                    <a
                      href="https://www.linkedin.com/in/sofia-bargues/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 underline"
                    >
                      Twitch
                    </a>
                  </ExternalLink>{" "}
                  .
                </TimelineItem>

                {/* 30 websites */}
                <TimelineItem>
                  Last year, I redesigned{" "}
                  <ExternalHighlight
                    href="https://days-of-code.vercel.app/"
                    text="30 local business websites"
                    color="#63f15c"
                    tooltip="Built with React and Tailwind CSS"
                  />{" "}
                  in <Underline text="30 days" color="#63f15c" />.
                </TimelineItem>

                {/* 30 projects */}
                <TimelineItem>
                  I also finished{" "}
                  <ExternalHighlight
                    href="https://days-of-code.vercel.app/"
                    text="30 web projects"
                    color="#3B82F6"
                    tooltip="Using React, Tailwind, Next.js, and TypeScript"
                  />{" "}
                  in <Underline text="30 days" color="#3B82F6" />, following
                  tutorials.
                </TimelineItem>
              </div>

              {/* GitHub Section */}
              <p className="text-lg text-gray-700 leading-relaxed">
                I love to learn by <Highlight text="building" color="#FCD34D" />
                . I have{" "}
                <span className="text-gray-900">{repoCount} repos</span> on{" "}
                <a
                  href="https://www.linkedin.com/in/sofia-bargues/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-1000 underline"
                >
                  GitHub{" "}
                </a>
                show what I've doing so far.
                <br />
                I'm <span>excited</span> to{" "}
                <Highlight
                  text="keep growing and take everything I've learned to the next level"
                  color="#10B981"
                />
                !
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  );
};

// 🟨 Highlight Component
const Highlight = ({ text, color }: { text: string; color: string }) => (
  <span className="relative">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-1 left-0 w-full h-2"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
    >
      <path
        d="M0,4 Q25,6 50,3 T100,5"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

// 🟩 Underline Component
const Underline = ({ text, color }: { text: string; color: string }) => (
  <span className="relative">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
    >
      <path
        d="M0,4 Q50,1 100,4"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

// 🟦 Tooltip External Link
const ExternalLink = ({
  href,
  children,
  color,
  tooltip,
}: {
  href: string;
  children: React.ReactNode;
  color: string;
  tooltip: string;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${color}-600 underline`}
      >
        {children}
      </a>
    </TooltipTrigger>
    <TooltipContent>
      <p>{tooltip}</p>
    </TooltipContent>
  </Tooltip>
);

// 🟫 Tooltip Highlight with Link
const ExternalHighlight = ({
  href,
  text,
  color,
  tooltip,
}: {
  href: string;
  text: string;
  color: string;
  tooltip: string;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-1 rounded cursor-help relative"
        style={{ color, backgroundColor: `${color}20` }} // soft bg
      >
        <span className="relative z-10">{text}</span>
        <svg
          className="absolute -bottom-1 left-0 w-full h-2"
          viewBox="0 0 100 6"
          preserveAspectRatio="none"
        >
          <path
            d="M0,3 L100,3"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </TooltipTrigger>
    <TooltipContent>
      <p>{tooltip}</p>
    </TooltipContent>
  </Tooltip>
);

// 🟨 Timeline item wrapper
const TimelineItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
    <p className="text-lg text-gray-700 leading-7">{children}</p>
  </div>
);

export default About;
