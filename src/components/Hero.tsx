
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center border-b-2 bg-[#e6e6e6] overflow-hidden">
      {/* Central content with better hierarchy */}
      <div className="relative z-10 flex flex-col md:flex-row items-center text-start max-w-6xl mx-auto px-6 gap-12">
        
        {/* Text content */}
        <div className="flex flex-col items-start text-start flex-1">
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
          
          {/* Call to action button */}
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 border-2 border-border bg-transparent text-foreground font-medium text-lg tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 rounded-xl"
          >
            Check out my work!
          </button>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face"
              alt="Sofia Bargues"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL DOWN indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-base tracking-wide">
        SCROLL DOWN <span className="ml-2">↓</span>
      </div>
    </section>
  );
};

export default Hero;
