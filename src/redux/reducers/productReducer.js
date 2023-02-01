import { ADD_PRODUCT_TO_DB, ADD_TO_CART, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, LOAD_PRODUCT, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

const initialState = {
    cart: [],
    loading: false,
    error: false,
    products: []
}

const productReducer = (state = initialState, action) => {
    let isProductExist = state.cart.find(p => p._id === action.payload?._id)
    let newCart = [...state.cart]
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
            };
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ADD_PRODUCT_TO_DB:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_TO_CART:
            if (isProductExist) {
                newCart = state.cart.filter(c => c._id !== isProductExist._id)
                action.payload.quantity = isProductExist.quantity + 1

            }
            else {
                action.payload.quantity = 1
            }
            return {
                ...state,
                cart: [...newCart, action.payload]
            };
        case REMOVE_FROM_CART:
            if (isProductExist) {
                newCart = state.cart.filter(c => c._id !== isProductExist._id)
                action.payload.quantity = isProductExist.quantity - 1
                if (!action.payload.quantity) {
                    return {
                        ...state,
                        cart: [...newCart]
                    };
                }
            }
            return {
                ...state,
                cart: [...newCart, action.payload]
            };
        default:
            return state
    }
}

export default productReducer