import { Meta,   StoryFn } from '@storybook/react';
import { DropDown, Props } from '@components/Dropdown-Menu/Dropdown';


const meta: Meta = {
  title: 'Basic DropDown',
  component: DropDown,
};

export default meta;

const Template: StoryFn<Props> = args => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<h1>First Item</h1>, <h1>Second Item</h1>],
  title: <p>...</p>,
};
