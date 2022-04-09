

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

export const userInfo = atom({
    key: "userInfo",
    default: "",
})

export const current = atom({
    key: "current",
    default: []
})

export const allUsers = atom({
    key: "all",
    default: []
})




export const regUser = atom({
    key: "regU",
    default: []
})

