import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Navbar from '../components/Navbar'

export default {
  title: 'Base/Navbar',
  component: Navbar

} as Meta

const Template: Story = () => <Navbar />

export const Styled = Template.bind({})
