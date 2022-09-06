import React, { ReactNode } from "react";
import "./Text.css";

export interface TextProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray";
  size?: "s" | "md" | "l";
  weight?: "light" | "regular" | "bold";
  italic?: Boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Text: React.FC<TextProps> = ({
  color,
  size = "md", // Set default size
  weight = "regular", // Set default weight
  italic = false, // Set default italic to false
  style,
  children = "Default name", // Set default name
  onClick,
}) => {
  return (
    <p
      className={
        (color ? `DS-color-primary-${color} ` : "DS-color-black ") + // If a color is provided use DS-color-primary-{color} otherwise use the default black color of the library
        `ALUI-Text-size-${size} ALUI-Text-weight-${weight} ` +
        (italic ? "ALUI-Text-italic" : "") // If italic is provided add the class "Text-italic" 
      }
      style={style}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Text;
