import { Link } from 'react-router-dom';
import './BigImageProjectCard.scss';

const BigImageProjectCard = ({ image, header, desc }) => {
  return (
    // bipc -> big image project card :)
    <div className="bipc">
      <img src={image} alt="A photo of a bedroom" />
      <div className="bipc--desc-container">
        <div className="bipc--text-container">
          <div className="bipc--text-container--header">{header}</div>
          <div className="bipc--text-container--desc">{desc}</div>
        </div>
        <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
          <button type="button">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/1A1A1A/forward--v1.png"
              alt="forward--v1"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BigImageProjectCard;
