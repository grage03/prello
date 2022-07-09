import React, { useCallback, useMemo, useState } from 'react'
import { TranslationFunc } from '../../interface'

import { About, Main } from './components'

enum Sidebars {
  ABOUT = 'about',
  ACTIONS = 'actions',
  BACKGROUND = 'background',
  MAIN = 'main',
  MORE = 'more',
  SETTINGS = 'settings',
}

export interface ISidebarRoutes {
  description?: string
  name: string
  sidebar: Sidebars
}

export const useSidebar = (t: TranslationFunc) => {
  const [ actualSidebar, setActualSidebar ] = useState<ISidebarRoutes>({
    name: t('board__menu_sidebar:menu'),
    sidebar: Sidebars.MAIN,
  })
  const isMain = actualSidebar.sidebar === Sidebars.MAIN

  const handleRouteMain = useCallback(() => setActualSidebar({
    name: t('board__menu_sidebar:menu'),
    sidebar: Sidebars.MAIN,
  }), [])
  const handleChangeSidebar = useCallback((sidebar: ISidebarRoutes) => setActualSidebar(sidebar), [])

  const sidebarRoutes = useMemo<ISidebarRoutes[]>(() => {
    return [
      {
        name: t('board__menu_sidebar:header-about'),
        description: t('board__menu_sidebar:description-about'),
        sidebar: Sidebars.ABOUT,
      },
      {
        name: t('board__menu_sidebar:header-change-background'),
        sidebar: Sidebars.BACKGROUND,
      },
      {
        name: 'Settings',
        sidebar: Sidebars.SETTINGS,
      },
      {
        name: 'More',
        sidebar: Sidebars.MORE,
      },
      {
        name: 'Actions',
        sidebar: Sidebars.ACTIONS,
      },
    ]
  }, [t])

  const renderCurrentSidebar = useMemo(() => {
    switch (actualSidebar.sidebar) {
      case Sidebars.MAIN: return <Main sidebarRoutes={sidebarRoutes} handleChangeSidebar={handleChangeSidebar} />
      case Sidebars.ABOUT: return <About />
      default: return null
    }
  }, [ actualSidebar, t ])

  return {
    headerName: actualSidebar.name,
    renderCurrentSidebar,
    handleRouteMain,
    isMain,
  }
}
