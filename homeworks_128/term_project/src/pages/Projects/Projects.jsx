import BigImageProjectCard from '../../components/BigImageProjectCard/BigImageProjectCard';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import './Projects.scss';

const galleryItemText = {
  header: 'Minimal Bedroom',
  desc: 'Decor / Architecture',
};

const galleryItems = [
  {
    image: 'src/pages/Projects/images/gallery1.png',
  },
  {
    image: 'src/pages/Projects/images/gallery2.png',
  },
  {
    image: 'src/pages/Projects/images/gallery3.png',
  },
  {
    image: 'src/pages/Projects/images/gallery4.png',
  },
  {
    image: 'src/pages/Projects/images/gallery5.png',
  },
  {
    image: 'src/pages/Projects/images/gallery6.png',
  },
];

const Projects = () => {
  return (
    <>
      <TitleBanner
        titleText={'Our projects'}
        backgroundImage={'src/pages/Projects/images/titlebanner.png'}
      />
      <div className="projects--gallery">
        <div className="projects--gallery--button projects--gallery--button--active">
          Bedroom
        </div>
        <div className="projects--gallery--grid">
          {galleryItems.map((item) => (
            <BigImageProjectCard
              image={item.image}
              header={galleryItemText.header}
              desc={galleryItemText.desc}
              key={item.image}
            />
          ))}
        </div>
        {/* <div className="projects--gallery--pagination">
          <div className="projects--gallery--pagination--item">01</div>
          <div className="projects--gallery--pagination--item">02</div>
          <div className="projects--gallery--pagination--item">03</div>
          <div className="projects--gallery--pagination--item">
            <img src="src/pages/Projects/images/arrow.svg" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Projects;
