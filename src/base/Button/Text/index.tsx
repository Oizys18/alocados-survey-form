import * as SC from "./Text.styles";

type ButtonProps = {
  name?: string;
  text?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Text = ({ name, text, color, onClick }: ButtonProps) => {
  return (
    <SC.Button name={name} color={color} onClick={onClick}>
      {text}
    </SC.Button>
  );
};

export default Text;
