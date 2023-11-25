import { IconChefHat, IconBooks, IconFileInvoice, IconHome } from '@tabler/icons-react';

export const pages = [
  {
    link: "/",
    text: "Home",
    icon: <IconHome />
  },
  {
    link: "/chefs",
    text: "Chefs",
    icon: <IconChefHat />
  },
  {
    link: "/recetas",
    text: "Recetas",
    icon: <IconFileInvoice />
  },
  {
    link: "/libros",
    text: "Libros",
    icon: <IconBooks />
  }
]