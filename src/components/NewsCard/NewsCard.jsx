import "./NewsCard.scss";

const NewsCard = ({ newsPhoto, newsTitle, newsDate, newsCategory }) => {
  return (
    <div className="newsCard--container">
      <img src={newsPhoto} alt="news-pic" />
      {newsCategory && <span>{newsCategory}</span>}
      <h4>{newsTitle}</h4>
      <div className="date-arrow--container">
        <p>{newsDate}</p>
        <button type="button">
          <img src="images/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
