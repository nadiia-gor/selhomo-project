import Button from '../../components/Button/Button';
import './Home.scss';

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
          <Button buttonText={'Get started'}></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
