import "./styles.css";
import img1 from "../../../../images/portfolio 1.svg";
import img2 from "../../../../images/portfolio 2.svg";
import img3 from "../../../../images/portfolio 3.svg";

export default function InfoBlock() {
  return (
    <div className="InfoPortfolioBlocks">
      <div className="InfoPortfolioBlock">
        <img src={img1} alt="img1" />
        <div className="TextPortfolioBlock">
          <h2>Lorem Ipsum is simply dummy text dummy text </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <button className="PortfolioBtn">Read more</button>
          </div>
        </div>
      </div>
      <div className="InfoPortfolioBlock">
        <div className="TextPortfolioBlock">
          <h2>Lorem Ipsum is simply dummy text dummy text </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <button className="PortfolioBtn">Read more</button>
          </div>
        </div>
        <img src={img2} alt="img2" />
      </div>
      <div className="InfoPortfolioBlock">
        <img src={img3} alt="img3" />
        <div className="TextPortfolioBlock">
          <h2>Lorem Ipsum is simply dummy text dummy text </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <button className="PortfolioBtn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
