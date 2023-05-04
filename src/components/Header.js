import "../styles/Article.css";
import plus from "../assets/plus.svg";

function Header({ headline, source, byline, date }) {
  const d = new Date(date);
  const formattedDate = d.getDate()
    ? [
        d.toDateString().slice(0, 3) + "," + d.toDateString().slice(3),
        d.toLocaleTimeString(),
      ].join(" ")
    : "Unknown Date";

  return (
    <div className="Header">
      <div className="title">{headline}</div>
      <div className="subheader">
        <div>
          <b>{byline}, </b>
          <i>{source}</i>
        </div>
      </div>
      <div className="subheader">
        <div className="date">{formattedDate}</div>
        <img className="inline-image" alt="Plus sign" src={plus}></img>
      </div>
    </div>
  );
}

export default Header;
