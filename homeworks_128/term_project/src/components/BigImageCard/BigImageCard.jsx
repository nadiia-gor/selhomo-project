import Button from '../Button/Button';
import './BigImageCard.scss';

const BigImageCard = ({ header, desc, buttonText, image, direction }) => {
  return (
    <div
      className={`big-image-card--container ${
        direction === 'rtl' ? 'flex-row-rtl' : 'flex-row'
      }`}
    >
      <div className="big-image-card--text-container">
        <h2 className="big-image-card--text-container--header">{header}</h2>
        <p className="big-image-card--text-container--desc">{desc}</p>
        <Button buttonText={buttonText} buttonColor={'#292F36'} />
      </div>
      <img src={image} alt="" className="big-image-card--image" />
    </div>
  );
};

export default BigImageCard;
