import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "../src/Heading";

export default {
  title: "Layouts/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading
    type={args.type}
    color={args.color}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </Heading>
);

export const heading = Template.bind({});
heading.args = {
  type: "h1",
  children: "Lorem ipsum dolor sit amet.",
};
