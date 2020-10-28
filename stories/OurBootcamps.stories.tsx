
import React from 'react'
import { Story, Meta } from '@storybook/react'

import OurBootcamps from '../components/Pages/Home/OurBootcamps'

export default {
  title: 'Home/OurBootcamps',
  component: OurBootcamps
} as Meta

const Template: Story = () => <OurBootcamps />

export const Styled = Template.bind({})
