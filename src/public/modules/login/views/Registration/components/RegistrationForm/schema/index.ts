import * as yup from "yup"

export const schema = yup.object({
  email: yup.string().required(),
  isAgree: yup.boolean().isTrue().required(),
  password: yup.string().required(),
})
