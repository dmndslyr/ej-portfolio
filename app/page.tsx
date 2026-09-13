import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import SelectedWork from "@/components/sections/selected-work";
import Expertise from "@/components/sections/expertise";
import Experience from "@/components/sections/experience";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <Expertise />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}