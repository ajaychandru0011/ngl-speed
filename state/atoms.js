import { atom } from "jotai"
export const recentApps = atom([])
export const userSelectedApp = atom({})
export const popupVisibleAtom = atom(false)
export const searchKeyword = atom("")
export const showRecentApps = atom({})
export const showSearchApps = atom({})
export const showAppSelected = atom(false)
export const focusAtom = atom({})
export const searchedApps = atom([])
export const formSubmitted = atom(false)
export const formError = atom(false)
export const formSuccess = atom(false)
export const selectedAppCountry = atom("in")
export const pricingWrapper = atom(false)
export const formInputData = atom({
    name: "",
    email: "",
    phone: "",
    message: "",
    appURL: "",
  })
  export const selectedCountryAtom = atom({
    code: "in",
    name: "India",
    flag: "in.png",
  })