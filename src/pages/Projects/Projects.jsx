import BigImageProjectCard from "../../components/BigImageProjectCard/BigImageProjectCard";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import "./Projects.scss";

const galleryItemText = {
  header: "Minimal Bedroom",
  desc: "Decor / Architecture",
};

const galleryItems = [
  {
    image: "images/projects/gallery1.png",
  },
  {
    image: "images/projects/gallery2.png",
  },
  {
    image: "images/projects/gallery3.png",
  },
  {
    image: "images/projects/gallery4.png",
  },
  {
    image: "images/projects/gallery5.png",
  },
  {
    image: "images/projects/gallery6.png",
  },
];

const Projects = () => {
  return (
    <>
      <TitleBanner
        titleText={"Our projects"}
        backgroundImage={"images/projects/titlebanner.png"}
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
      </div>
    </>
  );
};

export default Projects;
