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
        <div className="bipc--arrow">
          <img
            src="src/components/BigImageProjectCard/icons/arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BigImageProjectCard;
