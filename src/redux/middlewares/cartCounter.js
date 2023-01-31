import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
    // console.log('Store', store.getState());
    // console.log('action', action);
    // console.log('next', next(action));
    const cart = store.getState().product.cart
    // const productExist = cart.find(product => product._id === action.payload._id)
    if (action.type === ADD_TO_CART) {
        // console.log(action.payload);
        let isProductExist = cart.find(p => p._id === action.payload._id)
        if (!isProductExist) {
            const newAction = {
                ...action,
                payload: {
                    ...action.payload,
                    cartPosition: cart.length
                }
            }
            return next(newAction)
        }
        else {
            const newAction = {
                ...action,
                payload: {
                    ...action.payload,
                    cartPosition: isProductExist.cartPosition
                }
            }
            return next(newAction)
        }
    }

    return next(action)
}
export default cartCounter