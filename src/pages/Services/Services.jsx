import LeafCard from "../../components/LeafCard/LeafCard";
import ReadMoreCard from "../../components/ReadMoreCard/ReadMoreCard";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import WannaJoinBanner from "../../components/WannaJoinBanner/WannaJoinBanner";
import "./Services.scss";

const loremIpsum =
  "It is a long established fact will be distracted Lorem Ipsum is simply dummy from text of the typesetting industry.";

const readMoreContents = [
  {
    headerText: "Project Plan",
  },
  {
    headerText: "Interior Work",
  },
  {
    headerText: "Retail Design",
  },
  {
    headerText: "2d/3d Art Work",
  },
  {
    headerText: "Exterior Work",
  },
  {
    headerText: "Decoration Work",
  },
];

const leafCardContents = [
  {
    image: "images/services/leaf1.png",
    number: "01",
    header: "Concept & Details",
    desc: loremIpsum,
    rtl: false,
  },
  {
    image: "images/services/leaf2.png",
    number: "02",
    header: "Idea for Work",
    desc: loremIpsum,
    rtl: true,
  },
  {
    image: "images/services/leaf3.png",
    number: "03",
    header: "Design",
    desc: loremIpsum,
    rtl: false,
  },
  {
    image: "images/services/leaf4.png",
    number: "04",
    header: "Perfection",
    desc: loremIpsum,
    rtl: true,
  },
];

const Services = () => {
  return (
    <>
      <TitleBanner
        titleText={"Services"}
        backgroundImage={"images/services/banner.png"}
      />
      <div className="services--container">
        <div className="services--read-more-block">
          {readMoreContents.map((card) => (
            <ReadMoreCard
              className="services--read-more-card"
              headerText={card.headerText}
              bodyText={loremIpsum}
              key={card.headerText}
            />
          ))}
        </div>
        <div className="services--our-workflow">
          <div className="services--our-workflow--header">
            <h2>How We Work</h2>
            <p>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="services--our-workflow--cards">
            {leafCardContents.map((card) => (
              <LeafCard
                image={card.image}
                number={card.number}
                header={card.header}
                desc={card.desc}
                rtl={card.rtl}
                key={card.image}
              />
            ))}
          </div>
        </div>
        <WannaJoinBanner />
      </div>
    </>
  );
};

export default Services;
