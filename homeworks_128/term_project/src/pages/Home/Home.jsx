import Button from '../../components/Button/Button';
import ReadMoreCard from '../../components/ReadMoreCard/ReadMoreCard';
import './Home.scss';

const readMoreCardContents = [
  {
    headerText: 'Project Plan',
    bodyText:
      'There are many variations of the passages of lorem Ipsum from available majority.',
  },
  {
    headerText: 'Interior Work',
    bodyText:
      'There are many variations of the passages of lorem Ipsum from available majority.',
  },
  {
    headerText: 'Realization',
    bodyText:
      'There are many variations of the passages of lorem Ipsum from available majority.',
  },
];

const Home = () => {
  return (
    <div className="home--container">
      <div className="home--title-banner-container">
        <div className="home--title-banner-info">
          <h1>Let's make your home beautiful together</h1>
          <p>
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <Button buttonText={'Get started'} arrow={'white'} />
        </div>
      </div>
      <div className="home--read-more-snippets">
        {readMoreCardContents.map((card) => (
          <ReadMoreCard
            headerText={card.headerText}
            bodyText={card.bodyText}
            key={card.bodyText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
