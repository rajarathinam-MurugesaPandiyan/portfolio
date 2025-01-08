import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Services from "@/components/services/service";
import PortFolioHeader from "@/components/header/header";
import Skills from "@/components/skills/skills";
import Social from "@/components/social/social";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <PortFolioHeader></PortFolioHeader>
      <Intro></Intro>
      <Skills></Skills>
      <Social></Social>
      {/* <About></About> */}
      {/* <Services></Services>
      

      <Contact></Contact>
      <Footer></Footer> */}

    </div>
  );
}
