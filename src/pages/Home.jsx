import Community from "../components/section/community/Community";
import Discover from "../components/section/Discover";
import Footer from "../components/section/footer/Footer";
import HeroSection from "../components/section/HeroSection";
import MeetPeople from "../components/section/MeetPeople";
import OurValues from "../components/section/OurValues";
import Passions from "../components/section/Passions";

function Home() {
  return (
    <div>
      <HeroSection />
      <Discover />
      <OurValues />
      <Passions />
      <MeetPeople />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;
