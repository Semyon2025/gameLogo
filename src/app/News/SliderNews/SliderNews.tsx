import { NewsData } from "../../../mocks/NewsData";
import "./styles.css";

export default function SliderNews() {
  const leftNews = NewsData.slice(-2);
  const rightNews = NewsData.slice(0, -2);
  return (
    <div className="layuot">
      <div className="left-news">
        {leftNews.map((item) => (
          <div className="news-cardLeft" key={item.id}>
            <img src={item?.img} alt="img" />
            <div className="NameNew">
              <span style={{ backgroundColor: item.color }}>{item.name}</span>
              <p>{item?.time}</p>
            </div>
            <h2>{item?.comment}</h2>
            {item.text && <p>{item.text}</p>}
          </div>
        ))}
      </div>

      <div className="right-news">
        {rightNews.map((item) => (
          <div className="news-cardRight" key={item.id}>
            <img src={item.img} alt="" />
            <div className="content-new">
            <div className="NameNew">
              <span style={{ backgroundColor: item.color }}>{item.name}</span>
              {item.time || <span>{item.time}</span>}
            </div>
            
            <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
