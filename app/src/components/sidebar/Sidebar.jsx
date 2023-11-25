import { SidebarListElement } from "./SidebarListElement";
import { pages } from "../SidebarLinks";

export function Sidebar() {

  return (
      <aside className="z-40 w-64 h-screen transition-transform translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
            <ul className="space-y-2 font-medium">
              {pages.map((page) => <SidebarListElement key={page.text} icon={page.icon} text={page.text} link={page.link} />)}
            </ul>
        </div>
      </aside>
  )
}