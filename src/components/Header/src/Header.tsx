import React from "react";
import "./Header.css";

export interface HeaderProps {
  label: string;
}

function Header(props: HeaderProps) {
  return <h1>{props.label}</h1>;
}

export default Header;
