import { ADD_PRODUCT_TO_DB, ADD_TO_CART, LOAD_PRODUCT, REMOVE_FROM_CART, REMOVE_PRODUCT_FROM_DB } from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return { type: ADD_TO_CART, payload: product }
}
export const removeFromCart = (product) => {
    return { type: REMOVE_FROM_CART, payload: product }
}
export const loadProduct = (data) => {
    return { type: LOAD_PRODUCT, payload: data }
}
export const addProductToDb = (data) => {
    return { type: ADD_PRODUCT_TO_DB, payload: data }
}
export const removeProductFromDb = (id) => {
    return { type: REMOVE_PRODUCT_FROM_DB, payload: id }
}