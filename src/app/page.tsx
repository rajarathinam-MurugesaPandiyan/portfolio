import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Services from "@/components/services/service";
import PortFolioHeader from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Social from "@/components/social/social";

export default function Home() {
  return (
    <div>
       <PortFolioHeader></PortFolioHeader>
      <Intro></Intro>
      <About></About>
      <Services></Services>
      <Social></Social>
      <Skills></Skills>

    </div>
  );
}
