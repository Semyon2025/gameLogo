import Subscribe from "@app/home/subscribe/subscribe";
import HeroNews from "../HeroNews/HeroNews";


export const News = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="GeneralContainer">
          <HeroNews />
        </div>
        <Subscribe />
      </div>
    </div>
  );
};
