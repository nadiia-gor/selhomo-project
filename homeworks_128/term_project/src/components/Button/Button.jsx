import styled from 'styled-components';
import './Button.scss';

const StyledButton = styled.button`
  display: inline-flex;
  gap: 10px;
  color: #fff;
  border: 1px solid
    ${(props) => (props.buttonColor ? props.buttonColor : '#cda274')};
  border-radius: 18px;
  background: ${(props) => (props.buttonColor ? props.buttonColor : '#cda274')};
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  padding: ${(props) =>
    props.buttonPadding ? props.buttonPadding : '26px 49px 26px 48px'};
  text-align: center;
  font-family: 'Inter Variable';
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;
  letter-spacing: 0.36px;
  cursor: pointer;
`;

const Button = ({
  buttonText,
  buttonColor,
  arrow,
  buttonPadding,
  isSubmitType,
  ...props
}) => {
  return (
    <StyledButton
      type={isSubmitType ? 'submit' : 'button'}
      $buttonColor={buttonColor}
      buttonPadding={buttonPadding}
      {...props}
    >
      {buttonText}
      {arrow === 'black' ? (
        <img src="src\assets\images\icons\arrow-right.svg" />
      ) : (
        <img
          src="src\assets\images\icons\arrow-right.svg"
          style={{
            filter:
              'brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(22%) hue-rotate(207deg) brightness(106%) contrast(106%)',
          }}
        />
      )}
    </StyledButton>
  );
};

export default Button;
