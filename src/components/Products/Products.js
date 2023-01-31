import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrand, toggleStock } from '../../redux/actionCreators/reducerAction';
import Product from '../Product/Product';

const Products = () => {
    // const state = useSelector(s => s)
    // const { products, loading, error } = state.product
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector(s => s.product)
    const { productFilter: { brands, stock } } = useSelector(s => s.filter)

    let isBrandSelected = (brandName => brands.includes(brandName))
    let btnClass = 'active'
    let content = null

    if (products?.length) {
        content = products?.map(product =>
            <Col key={product._id} xs={12} sm={6} md={6} lg={4} className='mb-4'>
                <Card className='h-100'>
                    <Product product={product}></Product>
                </Card>
            </Col>)
    }

    if (products?.length && (stock || brands?.length)) {
        content = products?.filter(isStock => {
            if (stock) { return isStock.status === true }
            return isStock
        })?.filter(checkBrand => {
            if (brands.length) {
                return brands?.includes(checkBrand.brand)
            }
            return checkBrand
        })?.map(product =>
            <Col key={product._id} xs={12} sm={6} md={6} lg={4} className='mb-4'>
                <Card className='h-100'>
                    <Product product={product}></Product>
                </Card>
            </Col>)
    }

    if (loading) return <p>Loading...............</p>
    if (error) return <p>Server/Product Not Found. Please Reload Again................</p>
    return (
        <div>
            <Container>
                <Row>
                    <div className='d-flex justify-content-end mb-2 gap-2'>
                        <Button variant={`outline-primary ${stock ? btnClass : null}`} onClick={() => dispatch(toggleStock())} >In Stock</Button>
                        <Button variant="outline-primary" onClick={() => dispatch(toggleBrand('Intel'))} active={isBrandSelected('Intel')}>Intel</Button>
                        <Button variant="outline-primary" onClick={() => dispatch(toggleBrand('AMD'))} active={isBrandSelected('AMD')}>AMD</Button>
                    </div>
                </Row>
                <Row>
                    {
                        content
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;