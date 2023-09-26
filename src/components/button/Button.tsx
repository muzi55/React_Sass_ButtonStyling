import React from "react";
import "./Button.scss";
interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  color?: "red" | "blue" | "pink";
}

const Button = ({ className, onClick, color = "blue", children }: Props): JSX.Element => {
  return (
    <button className={`${className} ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
