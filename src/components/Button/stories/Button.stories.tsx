import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../src/Button";

export default {
  title: "Components/Button",
  argTypes: {
    disabled: { control: "boolean" },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    color={args.color}
    type={args.type}
    size={args.size}
    radius={args.radius}
    width={args.width}
    disabled={args.disabled}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </Button>
);

export const button = Template.bind({});
button.args = {
  children: "Default name"
}
