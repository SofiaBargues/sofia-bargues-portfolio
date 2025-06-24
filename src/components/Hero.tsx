
import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateEmpanadas = () => {
    const empanadas = [];
    for (let i = 0; i < 20; i++) {
      empanadas.push(
        <div
          key={i}
          className="absolute text-2xl animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            transform: `translateY(-20px)`,
          }}
        >
          🥟
        </div>
      );
    }
    return empanadas;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center border-b-2 bg-[#e6e6e6] overflow-hidden">
      {/* Empanada rain effect when hovering */}
      {isHovered && (
        <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
          <div className="relative w-full h-full">
            {generateEmpanadas().map((empanada, index) => (
              <div
                key={index}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              >
                🥟
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Central content with better hierarchy */}
      <div className="relative z-10 flex flex-col items-start text-start max-w-4xl mx-auto px-6">
        {/* Introduction text */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6 tracking-wide">
          Hi, my name is
        </p>
        
        {/* Main name with hover effect */}
        <h1 
          className="text-[clamp(2rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-4 cursor-pointer transition-all duration-300 hover:scale-105" 
          style={{
            letterSpacing: "0.03em"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Sofia Bargues.
        </h1>
        
        {/* Subtitle/tagline */}
        <h2 className="text-[clamp(1.5rem,6vw,3rem)] leading-tight font-bold text-muted-foreground mb-8" style={{
          letterSpacing: "0.02em"
        }}>
          I build things for the web.
        </h2>
        
        {/* Call to action button */}
        <button 
          onClick={scrollToProjects}
          className="px-8 py-4 border-2 border-border bg-transparent text-foreground font-medium text-lg tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 rounded-xl"
        >
          Check out my work!
        </button>
      </div>

      {/* SCROLL DOWN indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-base tracking-wide">
        SCROLL DOWN <span className="ml-2">↓</span>
      </div>
    </section>
  );
};

export default Hero;
