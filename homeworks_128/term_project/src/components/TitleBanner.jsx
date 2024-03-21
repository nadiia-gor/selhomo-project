const TitleBanner = ({ backgroundImage, titleText }) => {
  return (
    <div style={{ backgroundImage, textAlign: 'center' }}>
      <h2>{titleText}</h2>
    </div>
  );
};

export default TitleBanner;
