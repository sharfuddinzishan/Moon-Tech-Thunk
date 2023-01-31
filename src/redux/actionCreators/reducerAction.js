import { BRAND_TOGGLE, STOCK_TOGGLE } from "../actionTypes/actionTypes"

export const toggleBrand = (brandName) => { return { type: BRAND_TOGGLE, payload: brandName } }
export const toggleStock = () => { return { type: STOCK_TOGGLE } }