import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "../src/Heading";
export default {
  title: "ReactComponentLibrary/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading
    type={args.type}
    color={args.color}
    onClick={args.onClick}
    size={args.size}
    m={args.m}
    ml={args.ml}
    mt={args.mt}
    mr={args.mr}
    mb={args.mb}
    p={args.p}
    pl={args.pl}
    pt={args.pt}
    pr={args.pr}
    pb={args.pb}
  >
    {args.children}
  </Heading>
);

export const heading = Template.bind({});
heading.args = {
  type: "h1",
  children: "Lorem ipsum dolor sit amet.",
};
