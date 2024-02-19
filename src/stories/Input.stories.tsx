import { Meta, StoryObj } from "@storybook/react";
import Input from "@components/Input";

const meta: Meta = {
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    theme: {
      options: ["primary", "warning", "danger", "success"],
      control: "select",
    },
    paddingSize: {
      options: ["small", "medium", "large"],
      control: "select",
    },
  },
};

export default meta;

export const Inputigation: StoryObj<typeof Input> = {
  args: {
    paddingSize: "medium",
    theme: "primary",
    label: "Label",
    id: "storybook-input",
  },
  render: (args) => <Input {...args} />,
};
