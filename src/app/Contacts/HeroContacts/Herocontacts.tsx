import "./styles.css";
import WorldMap from "../../../images/Huge Global.svg";
import facebook from "../../../images/Group 5.png";
import instagram from "../../../images/Group 11.png";
import twitter from "../../../images/Group 10.png";
import IN from "../../../images/Group 9.png";
import Phone from "../../../images/phone.svg";
import GPS from "../../../images/gps 1.svg"

export default function HeroContacts() {
  return (
    <div className="HeroNews">
      <div className="nav">
        <span className="nav-link">Home</span>
        <span className="nav-sep"> &gt; </span>
        <span className="nav-link active">News</span>
      </div>

      <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <img src={WorldMap} alt="WorldMap" />
      <div className="contact-boxes">
        <div className="contact-box">
          <h4>Follow us</h4>
          <span>
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
          </span>
        </div>
        <div className="vertical-line"></div>
        <div className="phone-box">
       
            <img src={Phone} alt="" />
            <h3>+94 4444 5555 6</h3>
            
        </div>
        <div className="vertical-line"></div>
        <div className="phone-box">
         <img src={GPS} alt="" />
         <h3>but also the leap into electronic 
         typesetting</h3>
        </div>
      </div>
    </div>
  );
}
