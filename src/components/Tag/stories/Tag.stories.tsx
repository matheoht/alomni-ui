import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "../src/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag
    color={args.color}
    size={args.size}
    radius={args.radius}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </Tag>
);

export const tag = Template.bind({});
