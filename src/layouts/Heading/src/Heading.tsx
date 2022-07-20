import React from "react";
import "./Heading.css";

export interface HeadingProps {
  children?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: string;
  color?: string;
  style?: object;
  onClick?: () => void;
  m?: string;
  ml?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  p?: string;
  pl?: string;
  pt?: string;
  pr?: string;
  pb?: string;
}

const Heading: React.FC<HeadingProps> = ({
  type,
  children,
  onClick,
  size,
  color,
  m,
  ml,
  mt,
  mr,
  mb,
  p,
  pl,
  pt,
  pr,
  pb,
}) => {
  // React.createElement() method is used over JSX to avoid an if condition tree by passing directly the type
  return React.createElement(
    type || "h1",
    {
      onClick,
      style: {
        color,
        fontSize: size,
        margin: m,
        marginLeft: ml,
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        padding: p,
        paddingLeft: pl,
        paddingTop: pt,
        paddingRight: pr,
        paddingBottom: pb,
      },
    },
    children,
  );
};

export default Heading;
