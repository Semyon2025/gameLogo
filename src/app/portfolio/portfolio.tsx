import HeroPortfolio from "@app/portfolio/hero/Hero";
import Videoblock from "./videoBlock/videoblock";
import InfoBlock from "./videoBlock/infoBlock/infoBlock";
import Customers from "./videoBlock/customers/customer";
import Subscribe from "@app/home/subscribe/subscribe";

export const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="GeneralContainer">
        <HeroPortfolio />
        <Videoblock />
        <InfoBlock />
        <Customers />
        <Subscribe />
      </div>
    </div>
  );
};
