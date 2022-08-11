import * as SC from "./Button.styles";
import Text from "./Text";

type ButtonProps = {
  short?: boolean;
  name?: string;
  text?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Block = ({ short, name, text, color, onClick }: ButtonProps) => {
  return (
    <SC.Wrapper
      $short={short ? true : false}
      name={name}
      color={color}
      onClick={onClick}
    >
      {text}
    </SC.Wrapper>
  );
};

const Button = {
  Block,
  Text,
};

export default Button;
