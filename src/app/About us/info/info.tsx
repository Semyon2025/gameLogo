import "./styles.css";
import img from "../../../images/Rectangle 25.svg";

export default function InfoBlock() {
  return (
    <div className="infoBlock">
    <div className="gameInfo">
      <div className="InfoImg">
        {" "}
        <img src={img} alt="img" />
      </div>
      <div className="infoText">
        <p>Lorem ipsum</p>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
    </div>
    </div>
  );
}
