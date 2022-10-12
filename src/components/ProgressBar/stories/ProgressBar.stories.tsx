import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from "../src/ProgressBar";

export default {
  title: "Components",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar
    color={args.color}
    size={args.size}
    value={args.value}
    maxvalue={args.maxvalue}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </ProgressBar>
);

export const Progress_Bar = Template.bind({});
Progress_Bar.args = {
  children: "Default name"
}
