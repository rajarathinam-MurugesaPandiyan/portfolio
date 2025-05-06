import Intro from "@/components/intro/intro";
import PortFolioHeader from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Social from "@/components/social/social";
import { skillsconstants, socialConstants } from "@/constants/data_constants";
import Projects from "@/components/projects/projects";
import About from "@/components/about/about";

export default function Home() {
  return (
    <div>
      <PortFolioHeader />
      <Intro />
      <About/>
      <Projects />
      <Skills skillPropType={skillsconstants} />
      <Social socialProp={socialConstants} />
    </div>
  );
}
