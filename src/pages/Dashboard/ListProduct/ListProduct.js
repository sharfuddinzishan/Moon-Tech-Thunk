import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaMinusSquare, FaRegMinusSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import loadProductData from '../../../redux/thunk/products/fetchProducts';
import removeProducts from '../../../redux/thunk/products/removeProducts';


const ListProduct = () => {
    const { products, loading, error } = useSelector(s => s.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProductData())
    }, [dispatch])

    const removeBtn = (id) => {
        dispatch(removeProducts(id))
    }

    if (loading) return <p>Loading! Please Wait................</p>
    if (error) return <p>Server/Product Not Found. Please Reload Again................</p>

    return (
        <div>
            <Table responsive="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th><FaMinusSquare /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product?.model}</td>
                            <td>{product?.price}</td>
                            <td>{product?.stock}</td>
                            <td><Button variant='danger' onClick={() => removeBtn(product._id)}><FaRegMinusSquare />Remove</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ListProduct;