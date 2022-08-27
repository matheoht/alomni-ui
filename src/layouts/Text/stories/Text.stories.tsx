import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "../src/Text";

export default {
  title: "Layouts/Text",
  component: Text,
  argTypes: { italic: { control: 'boolean' }}
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text
    color={args.color}
    size={args.size}
    weight={args.weight}
    italic={args.italic}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </Text>
);

export const text = Template.bind({});

text.args = {
  size: "md",
  weight: "bold",
  italic: false,
  children: "Lorem ipsum dolor sit amet.",
};
