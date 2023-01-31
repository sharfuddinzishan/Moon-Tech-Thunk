import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from '../../../components/Product/Product';

const Cart = () => {
    const state = useSelector(s => s.product)
    const { cart, loading, error } = state
    if (loading) return <p>Loading...............</p>
    if (error) return <p>Reload Again...............</p>
    if (!loading && !error && !cart?.length) return <p>Nothing Added in Cart!</p>

    return (
        <div>
            <Container>
                <Row>
                    {
                        cart?.sort((a, b) => a.cartPosition - b.cartPosition).map(p => <Col key={p._id} xs={12} sm={6} md={4} lg={3} className='mb-4'>
                            <Card className='h-100'>
                                <Product product={p}></Product>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cart;