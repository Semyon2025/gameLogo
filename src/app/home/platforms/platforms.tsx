import './styles.css';
import arrow from '../../../images/arrow 4.png';
import icon1 from '../../../images/Group 48.png';
import icon2 from '../../../images/Group 49.png';
import icon3 from '../../../images/Group 50.png';
import icon4 from '../../../images/Group 51.png';
import icon5 from '../../../images/Group 52.png';
import icon6 from '../../../images/Group 53.png';
export default function Platforms() {
    return (  
<div className='Platform'>
<h3>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</h3>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
</p>
<div className='info'>
    <div className='icons'>
    <img src={icon1} alt='' />
    <p>
    Mobile Game Development
    </p>
    <img src={arrow} alt='' />
    </div>
    <div className='icons'>
    <img src={icon2} alt='' />
    <p>
    PC Game Development
    </p>
    <img src={arrow} alt='' />
    </div>
    <div className='icons'>
    <img src={icon3} alt='' />
    <p>
    PS4 Game Development
    </p>
    <img src={arrow} alt='' />
    </div>
    <div className='icons'>
    <img src={icon4} alt='' />
    <p>
    AR/VR Solutions
    </p>
    <img src={arrow} alt='' />
    </div>
    <div className='icons'>
    <img src={icon5} alt='' />
    <p>
    AR/ VR design
    </p>
    <img src={arrow} alt='' />
    </div>
    <div className='icons'>
    <img src={icon6} alt='' />
    <p>
    3D Modelings
    </p>
    <img src={arrow} alt='' />
    </div>
</div>
</div>
    );
}