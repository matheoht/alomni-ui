import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}

export default Button;
