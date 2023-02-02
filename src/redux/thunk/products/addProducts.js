import axios from "axios";
import { addProductToDb } from "../../actionCreators/productAction";
import { FETCHING_ERROR, FETCHING_START } from "../../actionTypes/actionTypes";

const addProducts = (productFormData) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: FETCHING_START })
            const result = await axios.post(`http://localhost:5000/products`, productFormData)
            if (result?.acknowleged) {
                dispatch(addProductToDb({ ...productFormData, _id: result.data.insertedId }))
            }
        }
        catch (e) { dispatch({ type: FETCHING_ERROR }) }
        finally { }
    }
}
export default addProducts