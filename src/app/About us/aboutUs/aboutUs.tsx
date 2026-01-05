import Subscribe from "@app/home/subscribe/subscribe";
import Hero from "../Hero/Hero";
import TextBlock from "../TextBlock/TextBlock";
import InfoBlock from "../info/info";

import Teams from "./teams/teams";

export const AboutUs = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="GeneralContainer">
          <Hero />
          <TextBlock />
        </div>
        <InfoBlock />
        <div className="GeneralContainer">
          <Teams />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};
