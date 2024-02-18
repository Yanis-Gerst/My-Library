import { Meta, StoryObj } from "@storybook/react";
import Nav from "@components/Nav";

const meta: Meta = {
  title: "Remarkable",
  component: Nav,
  argTypes: {
    size: {
      options: ["small", "medium", "large", "larger"],
      control: "select",
    },
  },
};

export default meta;

export const Navigation: StoryObj<typeof Nav> = {
  args: {
    size: "medium",
  },
  render: (args) => (
    <Nav {...args}>
      <p className="min-w-[100px]">Label</p>
    </Nav>
  ),
};
