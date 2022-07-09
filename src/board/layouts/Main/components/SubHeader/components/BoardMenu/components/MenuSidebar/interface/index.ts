export type TranslationFunc = (text: string) => string

export interface IMenuSidebar {
  t: TranslationFunc
  onClose: () => void
}
