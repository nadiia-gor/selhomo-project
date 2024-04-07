import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './NotFound.scss';

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <img
          src="src/pages/NotFound/images/404.png"
          className="notfound--image"
        />
        <div className="notfound--text">
          <h1>404</h1>
          <h2>We are sorry, but the page you requested was not found</h2>
          <Link to="/">
            <Button
              buttonText={'Back to Home'}
              buttonColor={'#292F36'}
              scrollToTop={true}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
