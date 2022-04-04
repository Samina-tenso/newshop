

import { atom } from "recoil"


export const productState = atom({
    key: "singleProduct",
    default: []
})

export const cartState = atom({

    key: "cartState",
    default: []
})

export const userN = atom({
    key: "userName",
    default: ""
})

export const userP = atom({
    key: "userPassword",
    default: ""
})

export const userData = atom({
    key: "userData",
    default: "",
})

