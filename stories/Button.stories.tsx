
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '../components/Button';

export default {
  title: 'Base/Button',
  component: Button,

} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  isPrimary: true,
  label: 'Conocer más',
  hasWhiteBg: false
};

export const Secondary = Template.bind({})
Secondary.args = {
  isPrimary: false,
  label: 'Conocer más',
  hasWhiteBg: false
};

export const White = Template.bind({});
White.args = {
  label: 'Conocer más',
  hasWhiteBg: true
};
