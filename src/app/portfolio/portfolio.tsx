import Foot from "@app/footer/footer";
import Header from "@app/home/header/header";
import Subscribe from "@app/home/subscribe/subscribe";
import HeroPortfolio from "@app/portfolio/hero/Hero";
import Videoblock from "./videoBlock/videoblock";
import InfoBlock from "./videoBlock/infoBlock/infoBlock";
import Customers from "./videoBlock/customers/customer";

export const Portfolio = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="GeneralContainer">
        <HeroPortfolio />
        <Videoblock />
        <InfoBlock/>
        <Subscribe />
        <Customers/>
        
        
      </div>
      <Foot />
    </div>
  );
};
