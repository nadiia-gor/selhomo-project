import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <img src="images/not_found/404.png" className="notfound--image" />
        <div className="notfound--text">
          <h1>404</h1>
          <h2>We are sorry, but the page you requested was not found</h2>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <Button buttonText={"Back to Home"} buttonColor={"#292F36"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
