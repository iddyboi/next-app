// Button.stories.tsx

import React from "react";

import { Meta, Story } from "@storybook/react";

import { Title, TitleProps } from "../src/components/UI/Title";

export default {
  title: "Components/Title",
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;
export const RedHeader = Template.bind({});

RedHeader.args = {
  label: "red title",
  color: "red",
};

export const GreenHeader = Template.bind({});
GreenHeader.args = {
  color: "green",
  label: "Green button",
};
