import './styles.css';
import facebook from '../../images/Group 5.png';
import instagram from '../../images/Group 11.png';
import twitter from '../../images/Group 10.png';
import IN from '../../images/Group 9.png';
export default function Foot() {
    return (
<footer>
<div className='footer-container'>
    <div className='foot'>
    <div>
<span className='logo'>
    logo
</span>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</p>
<p>
    @logo
</p>
</div>
<div>
    <h4>
    About us
    </h4>
    <ul>
        <li>Zeux</li>
        <li>Portfolio</li>
        <li>Careers</li>
        <li>Contact us</li>
    </ul>
    </div>
    <div>
        <h4>Contact us</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <p>+908 89097 890</p>
    </div>

    </div>
    <div className='social'>
    <a href="">
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="">
      <img src={instagram} alt="Instagram" />
    </a>
    <a href="">
      <img src={twitter} alt="Twitter" />
    </a>
    <a href="">
      <img src={IN} alt="LinkedIn" />
    </a>
   </div>
   </div>
    <hr />
    <p>Copyright ® 2021 Lorem All rights Rcerved</p>
    </footer>
    );
}