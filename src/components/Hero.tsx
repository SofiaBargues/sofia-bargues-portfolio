
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#e6e6e6] overflow-hidden">
      {/* Central content with better hierarchy */}
      <div className="relative z-10 flex flex-col items-center select-none max-w-4xl mx-auto px-6 text-center">
        {/* Introduction text */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6 tracking-wide">
          Hi, my name is
        </p>
        
        {/* Main name */}
        <h1 className="text-[clamp(2rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-4" style={{
          letterSpacing: "0.03em"
        }}>
          Sofia Bargues.
        </h1>
        
        {/* Subtitle/tagline */}
        <h2 className="text-[clamp(1.5rem,6vw,3rem)] leading-tight font-bold text-muted-foreground mb-8" style={{
          letterSpacing: "0.02em"
        }}>
          I build things for the web.
        </h2>
        
        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        
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
