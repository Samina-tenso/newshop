import { selector } from "recoil"
import { cartState } from "./Atom"
import { productState } from "./Atom"

export const cartStatus = selector({
    key: "cartStatus",
    get: ({ get }) => {
        const cart = get(cartState)
        const totalItems = cart.length
        return {
            totalItems
        }
    }
})

const productState = selector({
    key: "productState",
    get: ({ get }) => get(productState),
    set: ({ set }, newValue) => set(productState, newValue)

})


