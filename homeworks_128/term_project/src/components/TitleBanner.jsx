const TitleBanner = ({ backgroundImage, titleText }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        textAlign: 'center',
        height: '356px',
      }}
    >
      <h2>{titleText}</h2>
    </div>
  );
};

export default TitleBanner;
