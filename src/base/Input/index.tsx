import * as SC from "./Input.styles";
import Dense from "./Dense";

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const Filled = ({
  type,
  name,
  value,
  onChange,
  onFocus,
  label,
  placeholder,
}: InputProps) => {
  return (
    <>
      {label && <SC.Label htmlFor={name}>{label}</SC.Label>}
      <SC.Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </>
  );
};

const Input = {
  Filled,
  Dense,
};

export default Input;
