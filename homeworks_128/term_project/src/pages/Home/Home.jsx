import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import NewsCard from '../../components/NewsCard/NewsCard';
import PeopleThinkCard from '../../components/PeopleThinkCard/PeopleThinkCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ReadMoreCard from '../../components/ReadMoreCard/ReadMoreCard';
import WannaJoinBanner from '../../components/WannaJoinBanner/WannaJoinBanner';
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

const newsCardContents = [
  {
    newsPhoto: 'src/pages/Home/images/news-photo1.png',
    newsCategory: 'Kitchen Design',
    newsTitle: 'Let’s Get Solution For Building Construction Work',
    newsDate: '26 December, 2022',
  },
  {
    newsPhoto: 'src/pages/Home/images/news-photo2.png',
    newsCategory: 'Living Design',
    newsTitle: 'Low Cost Latest Invented Interior Creative Designing Ideas',
    newsDate: '22 November, 2023',
  },
  {
    newsPhoto: 'src/pages/Home/images/news-photo3.png',
    newsCategory: 'Interior Design',
    newsTitle: 'Best For Any Office & Business Interior Solution',
    newsDate: '4 December, 2023',
  },
];

const projectCardContents = [
  {
    projectPhoto: 'src/pages/Home/images/project-photos/project1.png',
  },
  {
    projectPhoto: 'src/pages/Home/images/project-photos/project2.png',
  },
  {
    projectPhoto: 'src/pages/Home/images/project-photos/project3.png',
  },
  {
    projectPhoto: 'src/pages/Home/images/project-photos/project4.png',
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
        <img src="src\pages\Home\images\we-create-art.png" alt="art" />
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
          <Link to="/contact">
            <Button
              buttonText={'Get Free Estimate'}
              arrow={'white'}
              buttonPadding={'26px 31px'}
            />
          </Link>
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
      <div className="home-partners--container">
        <img
          src="src/pages/Home/images/brand-icons/buffer.svg"
          alt="buffer-partner"
        />
        <img
          src="src/pages/Home/images/brand-icons/bigcommerce.svg"
          alt="bigcommerce-partner"
        />
        <img
          src="src/pages/Home/images/brand-icons/cion.svg"
          alt="cion-partner"
        />
        <img src="src/pages/Home/images/brand-icons/frame.svg" alt="partner" />
      </div>
      <div className="home--follow-our-projects--container">
        <h3>Follow Our Projects</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="home--projects-container">
        {projectCardContents.map((card) => (
          <ProjectCard
            projectPhoto={card.projectPhoto}
            key={card.projectPhoto}
          />
        ))}
      </div>
      <div className="home--statistics--container">
        <div className="home--statistics-item--container">
          <h4>12</h4>
          <br />

          <p>Years of experience</p>
        </div>
        <div className="home--statistics-item--container">
          <h4>1074</h4>
          <br />
          <p>Successful projects</p>
        </div>
        <div className="home--statistics-item--container">
          <h4>98</h4>
          <br />

          <p>Active projects</p>
        </div>
        <div className="home--statistics-item--container">
          <h4>583</h4>
          <br />

          <p>Happy customers</p>
        </div>
      </div>
      <div className="home--follow-our-projects--container">
        <h3>Articles & News</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div className="home--news-cards--container">
        {newsCardContents.map((card) => (
          <NewsCard
            newsPhoto={card.newsPhoto}
            newsCategory={card.newsCategory}
            newsTitle={card.newsTitle}
            newsDate={card.newsDate}
            key={card.newsPhoto}
          />
        ))}
      </div>
      <WannaJoinBanner />
    </div>
  );
};

export default Home;
