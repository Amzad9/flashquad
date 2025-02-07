import Discover from "../components/section/Discover"
import HeroSection from "../components/section/HeroSection"
import MeetPeople from "../components/section/MeetPeople"
import OurValues from "../components/section/OurValues"
import Passions from "../components/section/Passions"


function Home() {
    return (
        <div>
            <HeroSection />
            <Discover />
            <OurValues />
            <Passions />
            <MeetPeople />
        </div>
    )
}

export default Home