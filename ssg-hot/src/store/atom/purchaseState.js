import { atom } from "recoil"

export const purchaseState = atom({
    key:"purchaseState",
    default: [],
});

export const productQty = atom({
    key:"productQty",
    default:[]
})

export const totalPriceState = atom({
    key:"totalPriceState",
    default:0
})