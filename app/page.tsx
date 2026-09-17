import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import SelectedWork from "@/components/sections/selected-work";
import Expertise from "@/components/sections/expertise";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import GraphicDesign from "@/components/sections/graphic-design";
import Certifications from "@/components/sections/certifications";
import GithubActivity from "@/components/sections/github-activity";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div id="top">
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <Expertise />
        <Education />
        <Experience />
        <GraphicDesign />
        <Certifications />
        <GithubActivity />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}