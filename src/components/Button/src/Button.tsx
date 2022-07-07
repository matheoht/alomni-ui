import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return <button type="button">{label}</button>;
}

export default Button;
