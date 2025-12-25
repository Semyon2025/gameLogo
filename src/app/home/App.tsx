import './app.css';
import Header from './header/header';
import Hero from './Hero/Hero';
import GameBlock from './gameBlock/gameblock';
import Banner from './banner/banner';
import Platforms from './platforms/platforms';
import Projects from './projects/projects';
import Subscribe from './subscribe/subscribe';
import Foot from '@app/footer/footer';
export const App = () => {
  return (
    <main className='HomePage'>
      <div className='wrapper'>
      <Header />
      <div className='GeneralContainer'>
      <Hero />
      <GameBlock />
      <Banner />
      </div>
    </div>
    <Platforms/>
    <div className='wrapper'>
    <Projects/>
    <Subscribe/>
    </div>
    <Foot/>
    </main>
  );
};


