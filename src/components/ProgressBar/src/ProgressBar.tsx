import React, { ReactNode } from "react";
import "./ProgressBar.css";

export interface ProgressBarProps {
  color?: "red" | "orange" | "blue" | "green" | "purple" | "gray" | "black";
  size?: "s" | "md" | "l";
  value: number;
  maxvalue: number;
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  color = "blue", // Set default color
  size = "md", // Set default size
  value = 0, // Set default value
  maxvalue = 100, // Set default maxvalue
  children = "Default name", // Set default name
  style = {},
  onClick,
}) => {
  let percentage:any = Math.round((value / maxvalue) * 100); // Calculate the percentage

  //Clamp execive percentage
  if(percentage < 0){percentage = "0%"}
  else if(percentage > 100){percentage = "100%"}
  else{percentage = percentage + "%"}
  
  let custom_style = { ...style, width: percentage }; // Add the property {width: percentage} to props.style
  return (
   <div className={`ALUI-Pbar ALUI-Pbar-${size}`} onClick={onClick}>
      <div className="ALUI-Pbar-top">
        <p className="ALUI-Pbar-label">{children}</p>
        <p className="ALUI-Pbar-percentage">{percentage}</p>
      </div>
      <div>
        <div className={`ALUI-Pbar-progress ALUI-Pbar-color-${color}`} style={custom_style}></div>
        <div className="ALUI-Pbar-bg-progress"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
