import './ReadMoreCard.scss';

const ReadMoreCard = ({ headerText, bodyText, className }) => {
  return (
    <div className={`readMoreCard--container ${className}`}>
      <h4
        className="readMoreCard--header"
        style={{ textAlign: 'center', marginTop: 0 }}
      >
        {headerText}
      </h4>
      <p className="readMoreCard--body" style={{ textAlign: 'center' }}>
        {bodyText}
      </p>
      <span className="readMoreCard--button-wrapper">
        <a className="readMoreCard--button--text">Read More</a>
        <img
          className="readMoreCard--button--arrow"
          src="src\assets\images\icons\arrow-right.svg"
        />
      </span>
    </div>
  );
};

export default ReadMoreCard;
