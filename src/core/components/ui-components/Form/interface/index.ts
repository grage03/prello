export interface UiFormInterface {
  formInputs: string[]
  onSubmit(): void

  width?: string
}

export type InputType = {
  [value: string]: string
}
