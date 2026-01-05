import "./app.css";

import Hero from "./Hero/Hero";
import GameBlock from "./gameBlock/gameblock";
import Banner from "./banner/banner";
import Platforms from "./platforms/platforms";
import Projects from "./projects/projects";
import Subscribe from "./subscribe/subscribe";

export const App = () => {
  return (
    <main className="HomePage">
      <div className="wrapper">
        <div className="GeneralContainer">
          <Hero />
          <GameBlock />
          <Banner />
        </div>
      </div>
      <Platforms />
      <div className="wrapper">
        <Projects />
        <Subscribe />
      </div>
    </main>
  );
};
