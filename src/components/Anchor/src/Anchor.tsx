import React, { ReactNode } from "react";
import "./Anchor.css";

export interface AnchorProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray" | "black";
  size?: "s" | "md" | "l";
  weight?: "light" | "regular" | "bold";
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Anchor: React.FC<AnchorProps> = ({
  color = "blue", // Set default color
  size = "md", // Set default size
  weight = "regular", // Set default weight
  children = "Default name", // Set default name
  style,
  onClick,
}) => {
  return (
    <a
      href="javascript:" // Prevent default href behaviour
      className={`ALUI-Anchor ALUI-Anchor-color-${color} ALUI-Anchor-size-${size} ALUI-Anchor-weight-${weight}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Anchor;
