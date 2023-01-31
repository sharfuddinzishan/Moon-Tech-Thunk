import React, { useEffect } from 'react';
import Products from '../../../components/Products/Products';
import { } from 'redux'
import { useDispatch } from 'react-redux';
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from '../../../redux/actionTypes/actionTypes';
import axios from 'axios';


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: FETCHING_START })
        // axios.get(`https://moon-tech-redux-server.vercel.app/products`)
        axios.get(`http://localhost:5000/products`)
            .then(result => {
                dispatch({ type: FETCHING_SUCCESS, payload: result.data })
            })
            .catch(() => dispatch({ type: FETCHING_ERROR }))
    }, [dispatch])

    return (
        <div className='mt-3'>
            <Products></Products>
        </div>
    );
};

export default Home;