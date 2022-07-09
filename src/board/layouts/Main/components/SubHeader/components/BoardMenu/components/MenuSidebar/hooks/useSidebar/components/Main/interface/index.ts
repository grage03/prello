import { ISidebarRoutes } from '../../../index'

export interface IMenu {
  sidebarRoutes: ISidebarRoutes[]
  handleChangeSidebar: (sidebar: ISidebarRoutes) => void
}
