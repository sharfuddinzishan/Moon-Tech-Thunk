import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { FaCartPlus, FaCross, FaStudiovinari } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actionCreators/productAction';

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const { image, model, price, rating, spec, quantity } = product || {}
    const location = useLocation()
    const { pathname } = location

    const { motherboard, graphics, processor, ram, storage } = spec[0] || {}
    return (
        <>
            <Card.Img className='w-50 mx-auto' variant="top" src={image} />
            <Card.Body>
                <Card.Title className='text-center mb-0'><small>{model}</small></Card.Title>
                <Card.Text className='text-center'>
                    {
                        !pathname.includes('/cart') && <span className='fw-bold'>Rating {rating} &nbsp;&nbsp;&nbsp;</span>
                    }
                    <span className='fw-bold'>Price {price} &nbsp;&nbsp;&nbsp;</span>
                    {
                        pathname.includes('/cart') && <span className='fw-bold'>Quantity {quantity || 0}</span>
                    }
                </Card.Text>
            </Card.Body>
            {
                !pathname.includes('/cart') && <ListGroup className="list-group-flush">
                    <ListGroup.Item className='lh-sm'>{motherboard}</ListGroup.Item>
                    <ListGroup.Item className='lh-sm'>{graphics}</ListGroup.Item>
                    <ListGroup.Item className='lh-sm'>{processor}</ListGroup.Item>
                    <ListGroup.Item className='lh-sm'>{ram}+ {storage}</ListGroup.Item>
                </ListGroup>
            }
            <Card.Body>
                {
                    !pathname.includes('/cart') && <Row>
                        <Col xs={12} md={8}>
                            <Button className='w-100 mb-1' variant='primary' onClick={() => dispatch(addToCart(product))} ><FaCartPlus /> &nbsp; Add To Cart</Button>
                        </Col>

                        <Col xs={12} md={4}>
                            <Button className='w-100' variant='primary'><FaStudiovinari /></Button>
                        </Col>
                    </Row>
                }
                {
                    pathname.includes('/cart') && <Row>
                        <Col xs={10} md={10} className='mx-auto'>
                            <Button className='w-100 mb-1' variant='primary' onClick={() => dispatch(removeFromCart(product))} ><FaCross /> &nbsp; Remove</Button>
                        </Col>
                    </Row>
                }
            </Card.Body>
        </>
    );
};

export default Product;