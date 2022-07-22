import React, { ReactNode } from "react";
import "./Heading.css";

export interface HeadingProps {
  children?: ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: string;
  color?: string;
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
  type = "h1",
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
  // React.createElement() method is used instead JSX to avoid an if/else trees or switch by passing directly the type as argument of React.createElement()
  return React.createElement(
    type,
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
