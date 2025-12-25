import './styles.css';
import game2 from '../../../images/Rectangle 4.png';

export default function Banner() {
  return (
    <><div className='bigText'>
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
      </div><div className='banner'>
              <h3>
                  Lorem Ipsum
              </h3>
              <p>
                  Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s,
              </p>
              <img src={game2} alt='Game2' />
          </div></>
      
      );
    }