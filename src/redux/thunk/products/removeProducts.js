import axios from "axios";
import { removeProductFromDb } from "../../actionCreators/productAction";
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../../actionTypes/actionTypes";

const removeProducts = (productID) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: FETCHING_START })
            // const result = await axios.delete(`http://localhost:5000/products/${productID}`).then(r => {
            //     dispatch(removeProductFromDb(productID))
            //     dispatch({ type: FETCHING_SUCCESS })
            // })
            const result = await axios.delete(`http://localhost:5000/products/${productID}`)
            if (result.data.acknowleged || result.data.deletedCount) {
                dispatch(removeProductFromDb(productID))
                dispatch({ type: FETCHING_SUCCESS })
            }
        }
        catch (e) { dispatch({ type: FETCHING_ERROR }) }
        finally { }
    }
}
export default removeProducts