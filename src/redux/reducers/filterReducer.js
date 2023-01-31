import { BRAND_TOGGLE, STOCK_TOGGLE } from "../actionTypes/actionTypes"

const initialState = {
    productFilter: {
        brands: [],
        stock: false
    },
    keyword: ""
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case BRAND_TOGGLE:
            if (!state.productFilter.brands.includes(action.payload)) {
                return {
                    ...state,
                    productFilter: {
                        ...state.productFilter,
                        brands: [
                            ...state.productFilter.brands,
                            action.payload
                        ]
                    }
                }
            }
            else {
                return {
                    ...state,
                    productFilter: {
                        ...state.productFilter,
                        brands: state.productFilter.brands.filter(brandName => brandName !== action.payload)
                    }
                }
            }
        case STOCK_TOGGLE:
            return {
                ...state,
                productFilter: {
                    ...state.productFilter,
                    stock: !state.productFilter.stock
                }
            }

        default:
            return state
    }
}

export default filterReducer