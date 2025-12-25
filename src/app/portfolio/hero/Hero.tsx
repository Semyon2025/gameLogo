import "./styles.css";
import Location from "../../../images/location.svg";
import User from "../../../images/user.svg";
import Server from "../../../images/Server.svg";
export default function HeroPortfolio() {
  return (
    <div className="HeroPortfolio">
      <div className="nav">
        <span className="nav-link">Home</span>
        <span className="nav-sep"> &gt; </span>
        <span className="nav-link active">Portfolio</span>
      </div>
      <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="dark-boxes">
        <div className="dark-box">
          <img src={User} alt="User" />
          <div className="dark-box-content">
            <h3>30+</h3>
            <h4>Users</h4>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="dark-box">
          <img src={Location} alt="Location" />
          <div className="dark-box-content">
            <h3>30+</h3>
            <h4>Countries</h4>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="dark-box">
          <img src={Server} alt="Server" />
          <div className="dark-box-content">
            <h3>30+</h3>
            <h4>Projects</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
