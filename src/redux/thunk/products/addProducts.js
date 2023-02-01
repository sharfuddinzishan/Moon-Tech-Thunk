import axios from "axios";
import { addProductToDb } from "../../actionCreators/productAction";

const addProducts = (productFormData) => {
    return async (dispatch, getState) => {
        const result = await axios.post(`http://localhost:5000/products`, productFormData)
        if (result?.acknowleged) {
            dispatch(addProductToDb({ ...productFormData, _id: result.data.insertedId }))
        }

    }
}
export default addProducts