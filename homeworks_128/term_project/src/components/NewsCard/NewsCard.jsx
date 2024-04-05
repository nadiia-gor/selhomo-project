import './NewsCard.scss';

const NewsCard = ({ newsPhoto, newsTitle, newsDate, newsCategory }) => {
  return (
    <div className="newsCard--container">
      <img src={newsPhoto} alt="news-pic" />
      {newsCategory && <span>{newsCategory}</span>}
      <h4>{newsTitle}</h4>
      <div className="date-arrow--container">
        <p>{newsDate}</p>
        <img src="src/pages/Home/images/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default NewsCard;
