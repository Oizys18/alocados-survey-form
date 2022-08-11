import * as SC from "./Text.styles";
type ButtonProps = {
  name?: string;
  text?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Text = ({ name, text, color, onClick }: ButtonProps) => {
  return (
    <SC.Wrapper name={name} color={color} onClick={onClick}>
      {text}
    </SC.Wrapper>
  );
};

export default Text;
