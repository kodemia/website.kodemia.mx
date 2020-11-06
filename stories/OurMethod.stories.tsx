import React from 'react'
import { Story, Meta } from '@storybook/react'

import OurMethod, { Props } from '../components/Pages/Home/OurMethod'

export default {
  title: 'Home/OurMethod',
  component: OurMethod
} as Meta

const Template: Story<Props> = (args) => <OurMethod {...args} />

export const Default = Template.bind({})
Default.args = {
  ourMethod: {
    title:"Aprender a programar",
    keywords: "no es fácil",
    text:"En Kodemia no solo buscamos que \"copies y pegues código\" somos enemigos del \"si funciona, no le muevas \" nuestro \"Método\" te exigirá y te llevará al limite, pero al final la recompensa es enorme.",
    cards:[
      {
        title:"De la teoría a la \npráctica",
        text:"Todos los días, por módulos y por Bootcamp, llevarás proyectos prácticos reales",
        icon: "/icons/icon-practica.svg"
      }
    ]
  }
}
