import React, { ReactNode } from "react";
import "./Avatar.css";

export interface AvatarProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray" | "black";
  size?: "s" | "md" | "l";
  radius?: "sharp" | "default" | "rounded";
  src?: string;
  alt?: string;
  text?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  color = "blue", // Set default color
  size = "md", // Set default size
  radius = "rounded", // Set default radius
  src,
  alt,
  text = "Alomni-UI",
  style,
  onClick,
}) => {
  text = text.substr(0, 2).toUpperCase(); // Slice props.text to only get the first two characters and uppercase the string

  return src ? 
  <img onClick={onClick} className={`ALUI-Avatar-img ALUI-Avatar-size-${size} ALUI-Avatar-radius-${radius}`} src={src} alt={alt} style={style}></img>
  :
  <div onClick={onClick} className={`ALUI-Avatar-text ALUI-Avatar-color-${color} ALUI-Avatar-size-${size} ALUI-Avatar-radius-${radius}`} style={style}>{text}</div>;
};

export default Avatar;
