
import About from "@/components/About";
import Skills from "@/components/Skills";

const ProfileSections = () => (
  <section className="w-full max-w-6xl mx-auto my-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
    <div className="w-full lg:w-1/2 flex flex-col">
      <About
        noHeader
      />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col">
      <Skills
        noHeader
      />
    </div>
  </section>
);

export default ProfileSections;
