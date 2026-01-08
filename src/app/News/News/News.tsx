import Subscribe from "@app/home/subscribe/subscribe";
import HeroNews from "../HeroNews/HeroNews";
import SliderNews from "../SliderNews/SliderNews";


export const News = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="GeneralContainer">
          <HeroNews />
          
        </div>
        <SliderNews />
        <Subscribe />
      </div>
    </div>
  );
};
