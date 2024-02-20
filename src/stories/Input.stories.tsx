import { Meta, StoryObj } from "@storybook/react";
import Input from "@components/Input";
import { ChevronDownIcon } from "lucide-react";

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

export const TheInput: StoryObj<typeof Input> = {
  args: {
    paddingSize: "medium",
    theme: "primary",
    label: "Label",
    placeholder: "",
    id: "storybook-input",
  },
  render: (args) => (
    <Input {...args} className="min-w-[300px]" leftIcon={<ChevronDownIcon />}>
      <ChevronDownIcon />
    </Input>
  ),
};
