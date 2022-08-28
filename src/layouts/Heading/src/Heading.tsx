import React, { ReactNode } from "react";

export interface HeadingProps {
  children?: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray";
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  type = "h1", // Set default type
  color,
  style,
  children = "Default name", // Set default name 
  onClick,
}) => {

  return React.createElement(// React.createElement() method is used instead JSX to avoid an if/else trees or switch by passing directly the type as argument of React.createElement()
    type,
    {
      className: color ? `DS-color-primary-${color} ` : "DS-color-black ", // If a color is provided use DS-color-primary-{color} otherwise use the default black color of the library
      style,
      onClick,
    },
    children,
  );
};

export default Heading;
