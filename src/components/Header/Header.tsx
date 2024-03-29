import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>
          <Link to="/">TOEIC</Link>
        </h1>
        <div className="menu">
          <Link to="/create_word" className="link">
            Add Word
          </Link>
          <Link to="/create_day" className="link">
            Add Day
          </Link>
        </div>
      </div>
    </>
  );
}
