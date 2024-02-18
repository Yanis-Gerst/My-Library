import { Meta, StoryObj } from "@storybook/react";
import Button from "@components/Button/Button";

const meta: Meta = {
  title: "Remarkable",
  component: Button,
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
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "medium", "large", "larger"],
      control: "select",
    },
    bottomLabel: {
      control: "boolean",
    },
  },
};

export default meta;

export const TheButton: StoryObj<typeof Button> = {
  args: {
    theme: "primary",
    size: "medium",
    bottomLabel: false,
  },
  render: (args) => <Button {...args}>Label</Button>,
};
