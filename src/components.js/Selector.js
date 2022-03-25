import { cartState } from "./Atom"

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
