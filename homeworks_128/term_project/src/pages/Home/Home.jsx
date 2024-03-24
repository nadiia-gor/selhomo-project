import Button from '../../components/Button/Button';
import PeopleThinkCard from '../../components/PeopleThinkCard/PeopleThinkCard';
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

const peopleThinkCardContents = [
  {
    avatar: 'src/pages/Home/images/person1.png',
    personName: 'Natasha',
    description: 'Kyiv, Ukraine',
    info: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
  },
  {
    avatar: 'src/pages/Home/images/person2.jpg',
    personName: 'Raymond Galario',
    description: 'UK, London',
    info: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
  },
  {
    avatar: 'src/pages/Home/images/person3.jpg',
    personName: 'Benny Roll',
    description: 'USA, New York',
    info: 'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
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
            key={card.headerText}
          />
        ))}
      </div>
      <div className="home--we-create-art--container">
        <img src="src\pages\Home\images\we-create-art-1.png" alt="art1" />
        <img src="src\pages\Home\images\we-create-art-2.png" alt="art2" />
        <div className="home--we-create-art-info--container">
          <h2>We create art for modern life</h2>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="home--call-info--container">
            <img src="src\pages\Home\images\call-icon.svg" alt="call-icon" />
            <div className="home--phone-number">
              <p>012345678</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <Button
            buttonText={'Get Free Estimate'}
            arrow={'white'}
            buttonPadding={'26px 31px'}
          />
        </div>
      </div>
      <div className="home--what-people-thinks--container">
        <h3>What people think about us</h3>
        <div className="home--what-people-thinks-cards--container">
          {peopleThinkCardContents.map((card) => (
            <PeopleThinkCard
              avatar={card.avatar}
              personName={card.personName}
              description={card.description}
              info={card.info}
              key={card.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
