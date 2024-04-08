import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './WannaJoinBanner.scss';

const WannaJoinBanner = () => (
  <div className="wanna-join-banner--container">
    <h2>Wanna join the interno?</h2>
    <p>It is a long established fact will be distracted</p>
    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
      <Button buttonText={'Contact us'} />
    </Link>
  </div>
);

export default WannaJoinBanner;
