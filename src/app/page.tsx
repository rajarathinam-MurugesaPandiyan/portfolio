import Intro from "@/components/intro/intro";
import PortFolioHeader from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Social from "@/components/social/social";
import { socialConstants } from "@/constants/data_constants";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <PortFolioHeader />
      <Intro />
      <Projects />
      <Skills />
      <Social socialProp={socialConstants} />
      <Contact/>
      <Footer/>
    </div>
  );
}
