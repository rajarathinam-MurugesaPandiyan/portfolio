import About from "@/components/about/about";
import PortFolioHeader from "@/components/header/header";
import Intro from "@/components/intro/intro";
import Link from "next/link";


export default function DashBoardPage() {
    return <Link href={'dashboard'}>
        <div>
            <PortFolioHeader></PortFolioHeader>
            <Intro></Intro>
            {/* <Services></Services>
<Social></Social>
<Skills></Skills>
<Contact></Contact>
<Footer></Footer> */}

        </div>
    </Link>
}