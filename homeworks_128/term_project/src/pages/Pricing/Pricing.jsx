import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import './Pricing.scss';

const Pricing = () => {
  return (
    <>
      <TitleBanner
        titleText={'Pricing'}
        backgroundImage={'src/pages/Pricing/images/titlebanner.png'}
      />
      <div className="pricing">
        <div className="pricing--card">
          <h3>Design Advices</h3>
          <div className="pricing--card--price">
            <p>
              $<span>29</span>
            </p>
            <p>/month</p>
          </div>
          <div className="pricing--card--chip hide-chip">Placeholder</div>
          <div className="pricing--card--list">
            <p>General living space advices</p>
            <p>Renovation advices</p>
            <p>Interior design advices</p>
            <p>Furniture reorganization</p>
            <p>Up to 5 hours meetings</p>
          </div>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button buttonText={'Get Started'} buttonColor={'#292F36'} />
          </Link>
        </div>
        <div className="pricing--card">
          <h3>Complete interior</h3>
          <div className="pricing--card--price">
            <p>
              $<span style={{ color: '#cda274' }}>39</span>
            </p>
            <p>/month</p>
          </div>
          <div className="pricing--card--chip">Most popular plan</div>
          <div className="pricing--card--list">
            <p>Complete home redesign</p>
            <p>Interior and exterior works</p>
            <p>Modular interior planning</p>
            <p>Kitchen design</p>
            <p>Garages organization</p>
          </div>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button buttonText={'Get Started'} />
          </Link>
        </div>
        <div className="pricing--card">
          <h3>Furniture Design</h3>
          <div className="pricing--card--price">
            <p>
              $<span>59</span>
            </p>
            <p>/month</p>
          </div>
          <div className="pricing--card--chip hide-chip">Placeholder</div>
          <div className="pricing--card--list">
            <p>Furniture for living room</p>
            <p>Furniture refurbishment</p>
            <p>Sofas and armchairs</p>
            <p>Tables and chairs</p>
            <p>Kitchens</p>
          </div>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button buttonText={'Get Started'} buttonColor={'#292F36'} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pricing;
