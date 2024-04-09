import './TitleBanner.scss';

const TitleBanner = ({ backgroundImage, titleText }) => {
  return (
    <div
      className="title-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h2>{titleText}</h2>
    </div>
  );
};

export default TitleBanner;
