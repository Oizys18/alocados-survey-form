type ButtonProps = {
  type?: string;
  // size: "Small" | "Medium" | "Large";
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <>
      <button>Button</button>
    </>
  );
};

export default Button;
