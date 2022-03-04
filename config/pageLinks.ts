interface pageLink {
  name: string
  href: string
  isNavBar: boolean
  isFooter: boolean
  onlyLoggedIn?: boolean
}

const pageLinks: pageLink[] = [
  {
    name: "Bootcamps",
    href: "/#bootcamps",
    isNavBar: true,
    isFooter: true
  },
  {
    name: "Empresas",
    href: "/empresas",
    isNavBar: true,
    isFooter: true
  },
  {
    name: "Eventos",
    href: "/eventos",
    isNavBar: true,
    isFooter: false
  },
  {
    name: "Alumnos",
    href: "/login",
    onlyLoggedIn: true,
    isNavBar: true,
    isFooter: true
  },
  {
    name: "Empleos",
    href: "/empleos",
    isNavBar: false,
    isFooter: true
  }
]

export const navbarLinks = pageLinks.filter(pageLink => pageLink.isNavBar)

export const footerLinks = pageLinks.filter(pageLink => pageLink.isFooter)
