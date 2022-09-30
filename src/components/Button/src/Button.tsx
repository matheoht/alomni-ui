import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray" | "black";
  type?: "solid" | "outline";
  size?: "s" | "md" | "l";
  radius?: "sharp" | "default" | "rounded";
  width?: "default" | "full";
  disabled?: Boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color = "blue", // Set default color
  type = "solid", // Set default type
  size = "md", // Set default size
  radius = "default", // Set default radius
  width = "default", // Set default width
  disabled,
  style,
  children = "Default name", // Set default name
  onClick,
}) => {
  return (
    <button
      disabled={!!disabled}
      className={
        `ALUI-Button ALUI-Button-${type}-${color} ALUI-Button-size-${size} ALUI-Button-radius-${radius} ALUI-Button-width-${width}`
        /* `Button ${
          color ? `Button-${type}-${color} ` : "" // Set type and color
        }${
          size ? `Button-size-${size} ` : "" // Set size
        }${
          radius ? `Button-radius-${radius} ` : "" // Set radius
        }${width ? `Button-width-${width} ` : ""}` // Set width */
      }
      style={style}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
