import Navbar from "./component/Navbar/Navbar";
import Intro from "./section/Intro/page";
import AboutSection from "./section/About/About";
import Alumni from "./section/Alumni/Alumni";
import Campus from "./section/Campus/Campus";
import Facility from "./section/Facility/Facility";
import Ranking from "./section/Ranking/Ranking";
import Program from "./section/Program/Program";

export default function Home() {
  return (
    <div className="h-[500vh]">
      <Navbar/>
      <Intro/>
      <AboutSection/>
      <Ranking/>
      <Alumni/>
      <Campus/>
      <Facility/>
      <Program/>
    </div>
  );
}
