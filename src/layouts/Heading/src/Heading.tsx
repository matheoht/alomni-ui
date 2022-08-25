import React, { ReactNode } from "react";

export interface HeadingProps {
  children?: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray";
  style?: {};
  onClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  color,
  style,
  children,
  onClick,
}) => {
  //if a color is provided use color-primary-{color} otherwise use the default black color of the library
  let colorClass;
  if (color) {
    colorClass = "DS-color-primary-" + color;
  } else {
    colorClass = "DS-color-black";
  }

  // React.createElement() method is used instead JSX to avoid an if/else trees or switch by passing directly the type as argument of React.createElement()
  return React.createElement(
    type,
    {
      className: colorClass,
      style: style,
      onClick,
    },
    children,
  );
};

export default Heading;
