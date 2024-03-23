import './Button.scss';

const Button = ({ buttonText }) => {
  return (
    <button type="button" className="go-btn">
      {buttonText}
    </button>
  );
};

export default Button;
