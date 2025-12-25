import Header from "../header/header";
import Hero from "../Hero/Hero";
import TextBlock from "../TextBlock/TextBlock";
import InfoBlock from "../info/info"
import Subscribe from "@app/home/subscribe/subscribe";
import Foot from "@app/footer/footer";
import Teams from "./teams/teams";

export const AboutUs = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="GeneralContainer">
          <Hero />
          <TextBlock />
        </div>
        <InfoBlock />
        <div className="GeneralContainer">
        <Teams/>
        <Subscribe/>
        </div>
        <Foot/>
      </div>
    </div>
  );
};
