import './LeafCard.scss';

const LeafCard = ({ image, number, header, desc, rtl }) => {
  return (
    <div
      className={`leafcard--container ${
        rtl ? 'leafcard--flex-row-rtl' : 'leafcard--flex-row'
      }`}
    >
      <img src={image} className="leafcard--image" />
      <div className="leafcard--content">
        <h1
          className={`leafcard--content--number ${
            rtl ? 'textalign-left' : 'textalign-right'
          }`}
        >
          {number}
        </h1>
        <div className="leafcard--content--text">
          <h2 className="leafcard--content--text--header">{header}</h2>
          <p className="leafcard--content--text--desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default LeafCard;
