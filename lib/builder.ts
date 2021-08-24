
import { Builder, builder } from '@builder.io/react'
import builderComponents from 'components/builder'

export function init () {
  builder.init(process.env.BUILDER_API_KEY as string)

  builderComponents.menus.forEach(menu => {
    Builder.register('insertMenu', {
      name: menu.name,
      items: menu.items
    })
  })
}

if (process.env.NODE_ENV === 'production' && !process.env.BUILDER_API_KEY) {
  throw new Error('Builder api key is required in production')
}
