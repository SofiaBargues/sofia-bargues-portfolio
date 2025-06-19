
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#e6e6e6] overflow-hidden">
      {/* Top left outlined logo */}
      <div className="absolute top-6 left-6 z-20">
        <div className="border-2 border-black rounded-2xl px-5 py-2 flex items-center justify-center">
          <span className="font-bold text-2xl tracking-widest">S</span>
        </div>
      </div>
      
      {/* Top right WORK nav */}
      <div className="absolute top-8 right-10 z-20">
        <span className="font-light text-3xl tracking-tight">WORK</span>
      </div>
      
      {/* ABOUT bottom left */}
      <div className="absolute bottom-8 left-10 z-20">
        <span className="font-light text-3xl tracking-tight">ABOUT</span>
      </div>
      
      {/* CONTACT bottom right */}
      <div className="absolute bottom-8 right-10 z-20">
        <span className="font-light text-3xl tracking-tight">CONTACT</span>
      </div>

      {/* Central name */}
      <div className="relative z-10 flex flex-col items-center select-none">
        <h1 className="text-[clamp(2rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-2" style={{ letterSpacing: "0.03em" }}>
          SOFIA<br/>BARGUES
        </h1>
      </div>

      {/* SCROLL DOWN indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-base tracking-wide">
        SCROLL DOWN <span className="ml-2">↓</span>
      </div>
    </section>
  );
};

export default Hero;
