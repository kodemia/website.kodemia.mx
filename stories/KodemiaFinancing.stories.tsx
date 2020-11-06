
import React from 'react'
import { Story, Meta } from '@storybook/react'

import KodemiaFinancing, { Props } from '../components/Pages/Home/KodemiaFinancing'

export default {
  title: 'Home/KodemiaFinancing',
  component: KodemiaFinancing
} as Meta

const Template: Story<Props> = (args) => <KodemiaFinancing {...args} />

export const Default = Template.bind({})
Default.args = {
  info: {
    title: 'Queremos que alcances',
    keywords: 'tus metas',
    section: 'Apoyo Kodemia',
    text: 'Si tus ganas de desarrollarte superan tu capacidad de pago, en Kodemia tenemos opciones, nos interesa escucharte.'
  }
}
