import * as SC from "./Dense.styles";

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Dense = ({ type, name, value, onChange, placeholder }: InputProps) => {
  return (
    <>
      <SC.Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Dense;
