const namespace = [
  'error__message',
  'header__layout',
  'public__auth',
  'public__layout',
] as const

export type Namespace = typeof namespace[number]
