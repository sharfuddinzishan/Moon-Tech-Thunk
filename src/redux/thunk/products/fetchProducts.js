import axios from "axios"
import { loadProduct } from "../../actionCreators/productAction"

import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../../actionTypes/actionTypes"

const loadProductData = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: FETCHING_START })
            const result = await axios.get(`https://moon-tech-redux-server.vercel.app/products`)
            const data = await result.data
            if (data?.length) {
                dispatch(loadProduct(data))
                dispatch({ type: FETCHING_SUCCESS })
            }
        }
        catch (e) { dispatch({ type: FETCHING_ERROR }) }
        finally { }
    }
}

export default loadProductData