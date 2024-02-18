import { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "@components/DropdownMenu";
import Nav from "@components/Nav";

const meta: Meta = {
  title: "Remarkable ",
  component: DropdownMenu,
  argTypes: {
    align: {
      options: ["left", "center", "right"],
      control: "select",
    },
  },
};

export default meta;

export const Dropdown: StoryObj<typeof DropdownMenu> = {
  render: (args) => (
    <DropdownMenu className=" ml-48 " {...args}>
      <Nav size="medium">
        <p className="w-[100px]">Item 1</p>
      </Nav>
      <Nav size="medium">
        <p className="w-[100px]">Item 2</p>
      </Nav>
      <Nav size="medium">
        <p className="w-[100px]">Item 3</p>
      </Nav>
    </DropdownMenu>
  ),
};
