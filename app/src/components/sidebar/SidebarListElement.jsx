import Link from "next/link"

export function SidebarListElement(props) {

  const { icon, text, link } = props

  return (
    <li>
      <Link href={link} className="flex items-center p-2 text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-150 ease-in-out group">
        { icon }
        <span className="ms-3">{text}</span>
      </Link>
    </li>   
  )
}