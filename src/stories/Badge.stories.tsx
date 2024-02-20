import { Meta, StoryObj } from "@storybook/react";
import Badge from "@components/Badge";

const meta: Meta = {
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "warning",
        "danger",
        "success",
      ],
      control: "select",
    },
    size: {
      options: ["small", "medium", "large"],
      control: "select",
    },
  },
};

export default meta;

export const TheButton: StoryObj<typeof Badge> = {
  args: {
    theme: "primary",
    size: "medium",
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};
