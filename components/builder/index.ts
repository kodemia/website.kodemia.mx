
import InfoCard from 'components/builder/InfoCard.builder'
import H1 from 'components/builder/H1.builder'
import H2 from 'components/builder/H2.builder'
import H3 from 'components/builder/H3.builder'
import H4 from 'components/builder/H4.builder'
import H5 from 'components/builder/H5.builder'

export default {
  menus: [
    {
      name: 'Encabezados',
      items: [
        H1,
        H2,
        H3,
        H4,
        H5
      ]
    },
    {
      name: 'Utilidades',
      items: [
        InfoCard
      ]
    }
  ]
}
