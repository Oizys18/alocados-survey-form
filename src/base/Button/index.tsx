import Text from "./Text";
import * as SC from "./Button.styles";

type ButtonProps = {
  short?: boolean; // 짧은 버튼?
  name?: string;
  text?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Block = ({ short, name, text, color, onClick }: ButtonProps) => {
  return (
    <SC.Button
      $short={short ? true : false}
      name={name}
      color={color}
      onClick={onClick}
    >
      {text}
    </SC.Button>
  );
};

const Button = {
  Block,
  Text,
};

export default Button;
