import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Kodemia-Components/Button',
  component: Button,

} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'Primary',
  label: 'Conocenos',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'Secondary',
  label: 'Conocenos'
};

export const White = Template.bind({});
Secondary.args = {
  type: 'White',
  label: 'Conocenos'
};
