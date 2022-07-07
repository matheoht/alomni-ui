import React from "react";
import "./Header.css";

export interface HeaderProps {
  label: string;
}

function Header({ label }: HeaderProps) {
  return <h1>{label}</h1>;
}

export default Header;
