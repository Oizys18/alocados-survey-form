import { memo } from "react";

import Dense from "./Dense";
import * as SC from "./Input.styles";

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Filled = memo(function Filled({
  type,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <SC.Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});

const Input = {
  Filled,
  Dense,
};

export default Input;
