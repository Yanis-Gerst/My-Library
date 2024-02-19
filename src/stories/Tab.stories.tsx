import { Meta, StoryObj } from "@storybook/react";
import Tab from "@components/Tab";

const meta: Meta = {
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large", "larger"],
      control: "select",
    },
  },
};

export default meta;

export const TheTab: StoryObj<typeof Tab> = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <Tab {...args}>
      <p>Label</p>
    </Tab>
  ),
};
