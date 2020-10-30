import React from 'react'
import { Story, Meta } from '@storybook/react'

import WhyKodemia, { Props} from '../components/Pages/Home/WhyKodemia'

export default {
  title: 'base/WhyKodemia',
  component: WhyKodemia,
} as Meta

const Template: Story<Props> = (infoCards) => <WhyKodemia {...infoCards} />

export const Default = Template.bind({})
