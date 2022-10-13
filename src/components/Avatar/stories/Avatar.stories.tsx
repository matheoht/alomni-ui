import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../src/Avatar";

export default {
  title: "Components",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar
    color={args.color}
    size={args.size}
    radius={args.radius}
    src={args.src}
    alt={args.alt}
    text={args.text}
    style={args.style}
    onClick={args.onClick}
  />
);

export const avatar = Template.bind({});
