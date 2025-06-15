
import { Instagram, Linkedin, Facebook } from "lucide-react";
import OrganicBadge from "./OrganicBadge";

// You may want to update the fontWeight/family in tailwind.config for that extended effect.
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#e6e6e6] overflow-hidden">
      {/* Top left outlined logo */}
      <div className="absolute top-6 left-6 z-20">
        <div className="border-2 border-black rounded-2xl px-5 py-2 flex items-center justify-center">
          <span className="font-bold text-2xl tracking-widest">D</span>
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
      {/* Left side vertical "w." and "Honors" bar */}
      <div className="absolute top-1/4 left-0 flex flex-col items-center z-20">
        <div className="bg-black text-white text-3xl font-semibold px-6 py-3 rounded-r-lg mb-2">
          w.
        </div>
        <div className="w-8 bg-transparent flex flex-col items-center mt-2">
          <span className="text-black text-xs rotate-[-90deg] origin-left tracking-widest mt-8 select-none">Honors</span>
        </div>
      </div>
      {/* Right side vertical social icons */}
      <div className="absolute top-1/3 right-10 flex flex-col items-center gap-6 z-20">
        {/* Replace with Behance icon if desired */}
        <a href="#" aria-label="Behance" className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="none"/>
            <text x="11" y="31" fontSize="18" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Bē</text>
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" aria-label="Facebook" className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition-colors">
          <Facebook size={24} />
        </a>
      </div>
      {/* Central name */}
      <div className="relative z-10 flex flex-col items-center select-none">
        <h1 className="text-[clamp(2rem,10vw,6rem)] leading-none font-extrabold tracking-wide uppercase text-black mb-2" style={{ letterSpacing: "0.03em" }}>
          DEIDRE<br/>DRISCOLL
        </h1>
      </div>
      {/* Floating badges */}
      <OrganicBadge 
        className="absolute top-1/3 left-[28%] z-10"
        color="#FF8600"
        text="GRAPHIC DESIGN"
      />
      <OrganicBadge 
        className="absolute bottom-[24%] right-[22%] z-10"
        color="#3A8DFF"
        text="ART DIRECTION"
      />
      {/* SCROLL DOWN indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-base tracking-wide">
        SCROLL DOWN <span className="ml-2">↓</span>
      </div>
    </section>
  );
};

export default Hero;
