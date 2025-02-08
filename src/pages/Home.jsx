import Community from "../components/section/community/Community";
import Discover from "../components/section/Discover";
import Footer from "../components/section/footer/Footer";
import MeetPeople from "../components/section/MeetPeople";
import OurValues from "../components/section/OurValues";
import Passions from "../components/section/Passions";
import Hero from "../components/section/Hero";

function Home() {
  return (
    <div>
      <Hero />
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
