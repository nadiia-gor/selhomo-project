import { Link } from "react-router-dom";
import "./ReadMoreCard.scss";

const ReadMoreCard = ({ headerText, bodyText, className }) => {
  return (
    <div className={`readMoreCard--container ${className}`}>
      <h4
        className="readMoreCard--header"
        style={{ textAlign: "center", marginTop: 0 }}
      >
        {headerText}
      </h4>
      <p className="readMoreCard--body" style={{ textAlign: "center" }}>
        {bodyText}
      </p>
      <span className="readMoreCard--button-wrapper">
        <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
          <a className="readMoreCard--button--text">Read More</a>
        </Link>
        <img
          className="readMoreCard--button--arrow"
          src="images/icons/arrow-right.svg"
        />
      </span>
    </div>
  );
};

export default ReadMoreCard;
