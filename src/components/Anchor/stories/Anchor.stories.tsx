import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Anchor from "../src/Anchor";

export default {
  title: "Components/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor
    color={args.color}
    size={args.size}
    weight={args.weight}
    style={args.style}
    onClick={args.onClick}
  >
    {args.children}
  </Anchor>
);

export const anchor = Template.bind({});
anchor.args = {
  children: "Default name"
}
