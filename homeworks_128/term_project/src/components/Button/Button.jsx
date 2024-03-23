import styled from 'styled-components';
import './Button.scss';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: flex-end;
  color: #fff;
  border: 1px solid
    ${(props) => (props.buttonColor ? props.buttonColor : '#cda274')};
  border-radius: 18px;
  background: ${(props) => (props.buttonColor ? props.buttonColor : '#cda274')};
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  padding: 26px 49px 26px 48px;
  text-align: center;
  font-family: 'Inter Variable';
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;
  letter-spacing: 0.36px;
  cursor: pointer;
`;

const Button = ({ buttonText, buttonColor, arrow }) => {
  return (
    <StyledButton type="button" buttonColor={buttonColor}>
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
