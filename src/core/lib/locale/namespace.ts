const namespace = [
  'error__message',
  'public__auth',
  'public__layout',
  'header__layout',
] as const

export type Namespace = typeof namespace[number]
