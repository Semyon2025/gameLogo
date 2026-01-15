import './styles.css';
import Slider from '../../features/slider';

export default function Hero() {
  return (
    <div className='heroAboutContainer'>
      <div>
      <div className='nav'>
        <span className='nav-link'>Home</span>
        <span className='nav-sep'> &gt; </span>
        <span className='nav-link active'>About us</span>
      </div>
      <div className='Info'>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and.
        </h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <button className='btn'>Get more touch</button>
      </div>
      </div>
      <div className='Image'>
      <Slider />
      </div>
    </div>
  );
}