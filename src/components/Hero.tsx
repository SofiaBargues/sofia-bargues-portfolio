const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
              src="/lovable-uploads/d7e9f80a-b1e5-4319-8914-8bb93ab399a2.png"
              alt="Sofia Bargues"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
