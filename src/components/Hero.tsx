const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-[#e6e6e6] overflow-hidden">
      {/* Top left outlined logo */}
      <div className="absolute top-6 left-6 z-20">
        
      </div>

      {/* Central name */}
      <div className="relative z-10 flex flex-col items-center select-none">
        <h1 className="text-[clamp(2rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-2" style={{
        letterSpacing: "0.03em"
      }}>
          SOFIA<br />BARGUES
        </h1>
      </div>

      {/* SCROLL DOWN indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-base tracking-wide">
        SCROLL DOWN <span className="ml-2">↓</span>
      </div>
    </section>;
};
export default Hero;