import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer, FooterProps } from '../components/Footer';

export default {
  title: 'Kodemia-Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Only = Template.bind({});
Only.args = {

};
