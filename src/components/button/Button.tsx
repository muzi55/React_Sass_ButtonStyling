import React from "react";
import "./Button.scss";
interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "red" | "blue" | "pink";
  rounded?: boolean;
}

const Button = ({ className, onClick, color = "blue", size = "medium", rounded, children }: Props): JSX.Element => {
  return (
    <button className={`${className} ${color} ${size} ${rounded}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
