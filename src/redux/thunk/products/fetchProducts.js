import axios from "axios"
import { loadProduct } from "../../actionCreators/productAction"

import { FETCHING_ERROR, FETCHING_SUCCESS } from "../../actionTypes/actionTypes"

const loadProductData = () => {
    return async (dispatch, getState) => {
        try {
            const result = await axios.get(`http://localhost:5000/products`)
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