import React from "react";
import "./Button.scss";
interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "red" | "blue" | "pink";
  fullwidth?: boolean;
  rounded?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({ className, type = "button", onClick, color = "blue", size = "medium", rounded, fullwidth, children }: Props): JSX.Element => {
  return (
    <button className={`${className} ${color} ${size} ${rounded} ${fullwidth}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
