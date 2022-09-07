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

export const originPriceState = atom({
    key:"originPriceState",
    default:0
})

export const totalProductCntState = atom({
    key:"totalProductCntState",
    default:0
})

export const categoryState = atom({
    key:"categoryState",
    default:0
})

export const categoryMState = atom({
    key:"categoryMState",
    default:0
})