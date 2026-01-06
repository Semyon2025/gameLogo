import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

export default function HeroNews() {
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

      <div className="search">
        <SearchIcon className="search-icon" />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}