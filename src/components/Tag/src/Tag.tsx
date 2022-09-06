import React, { ReactNode } from "react";
import "./Tag.css";

export interface TagProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray";
  size?: "s" | "md" | "l";
  radius?: "sharp" | "default" | "rounded";
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  color = "blue", // Set default color
  size = "md", // Set default size
  radius = "default", // Set default radius
  style,
  children = "Default name", // Set default name
  onClick,
}) => {
  return (
    <div
      className={`ALUI-Tag ALUI-Tag-color-${color} ALUI-Tag-size-${size} ALUI-Tag-radius-${radius}`}
      style={style}
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
};

export default Tag;
