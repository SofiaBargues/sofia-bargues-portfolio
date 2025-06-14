
import About from "@/components/About";
import Skills from "@/components/Skills";

const ProfileSections = () => (
  <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 lg:divide-x divide-border max-w-6xl mx-auto my-20">
    <div className="w-full lg:w-1/2 px-4">
      <About />
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <Skills />
    </div>
  </section>
);

export default ProfileSections;
