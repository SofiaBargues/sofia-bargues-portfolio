import Image from "public/tuki.webp";
import { useState } from "react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showTuki, setShowTuki] = useState(false);
  const [confetti, setConfetti] = useState<
    Array<{ id: number; x: number; y: number; color: string }>
  >([]);

  const triggerTukiEasterEgg = () => {
    setShowTuki(true);

    // Generate confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"][
        Math.floor(Math.random() * 5)
      ],
    }));
    setConfetti(newConfetti);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowTuki(false);
      setConfetti([]);
    }, 3000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center border-b-2 bg-[#e6e6e6] overflow-hidden"
    >
      {/* Central content with better hierarchy */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center text-start max-w-6xl mx-auto px-6 gap-8 md:gap-12 container py-8">
        {/* Text content */}
        <div className="flex flex-col md:items-start flex-1 text-center items-center  md:text-start">
          {/* Introduction text */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 tracking-wide">
            Hi, my name is
          </p>

          {/* Main name */}
          <h1
            className="text-[clamp(2rem,8vw,4rem)] md:text-[clamp(2.5rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-3 md:mb-4"
            style={{
              letterSpacing: "0.03em",
            }}
          >
            Sofia Bargues
          </h1>

          {/* Subtitle/tagline */}
          <h2
            className="text-[clamp(1.2rem,5vw,2rem)] md:text-[clamp(1.5rem,6vw,3rem)] text-balance leading-tight font-bold text-muted-foreground mb-6 md:mb-8"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            Frontend dev learning in public
          </h2>

          {/* Call to action button */}
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 border-2 border-border bg-transparent text-foreground font-medium text-lg tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 rounded-xl"
          >
            Meet Me!
          </button>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="relative w-48 h-48  sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border border-muted-foreground shadow-lg mx-auto">
            <img
              src="/uploads/heroImage.webp"
              alt="Sofia Bargues"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 400px"
            />
            {/* Invisible clickable area for easter egg */}
            <div
              className="absolute top-[35%] left-[1%] w-12 h-12 cursor-pointer z-10 hover:bg-green-400 hover:bg-opacity-20 rounded-full transition-all duration-200"
              onClick={triggerTukiEasterEgg}
              title="🎉 Click me!"
            />
          </div>
          {/* Tuki Easter Egg */}
          {showTuki && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              {/* Confetti */}
              {confetti.map((piece) => (
                <div
                  key={piece.id}
                  className="absolute w-2 h-2 animate-bounce"
                  style={{
                    left: `${piece.x}%`,
                    top: `${piece.y}%`,
                    backgroundColor: piece.color,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                />
              ))}

              {/* Tuki character */}
              <div className="animate-pulse">
                <img
                  src="/tuki.webp"
                  alt="Tuki celebrating!"
                  width={200}
                  height={200}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
