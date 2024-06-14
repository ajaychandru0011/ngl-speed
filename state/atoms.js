import { atom } from "jotai"
export const formSubmitted = atom(false)
export const formError = atom(false)
export const formSuccess = atom(false)
export const formInputData = atom({
    name: "",
    email: "",
    phone: "",
    message: "",
    appURL: "",
  })