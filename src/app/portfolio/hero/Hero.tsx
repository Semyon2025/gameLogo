import "./styles.css";
import Location from "../../../images/location.svg";
import User from "../../../images/user.svg";
import Server from "../../../images/Server.svg";
export default function HeroPortfolio() {
  return (
    <div className="HeroPortfolio">
      <div className="nav">
        <span className="navLink">Home</span>
        <span className="navSep"> &gt; </span>
        <span className="navLink active">Portfolio</span>
      </div>
      <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="darkBoxes">
        <div className="darkBox">
          <img src={User} alt="User" />
          <div className="darkBoxContent">
            <h3>30+</h3>
            <h4>Users</h4>
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="darkBox">
          <img src={Location} alt="Location" />
          <div className="darkBoxContent">
            <h3>30+</h3>
            <h4>Countries</h4>
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="darkBox">
          <img src={Server} alt="Server" />
          <div className="darkBoxContent">
            <h3>30+</h3>
            <h4>Projects</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
