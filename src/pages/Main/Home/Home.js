import React, { useEffect } from 'react';
import Products from '../../../components/Products/Products';
import { } from 'redux'
import { useDispatch } from 'react-redux';
import loadProductData from '../../../redux/thunk/products/fetchProducts';

const Home = () => {
    const dispatch = useDispatch()

    /*
    useEffect(() => {
        dispatch({ type: FETCHING_START })
        // axios.get(`https://moon-tech-redux-server.vercel.app/products`)
        axios.get(`https://moon-tech-redux-server.vercel.app/products`)
            .then(result => {
                dispatch({ type: FETCHING_SUCCESS, payload: result.data })
            })
            .catch(() => dispatch({ type: FETCHING_ERROR }))
    }, [dispatch])
    */
    useEffect(() => {
        dispatch(loadProductData())
    }, [dispatch])

    return (
        <div className='mt-3'>
            <Products></Products>
        </div>
    );
};

export default Home;