import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import addProducts from '../../../redux/thunk/products/addProducts';

const AddProduct = () => {
    const dispatch = useDispatch()
    const productInfo = {
        model: null,
        brand: null,
        price: null,
        rating: null,
        image: null,
        status: true,
        spec: [{
            processor: null,
            motherboard: null,
            ram: null,
            graphics: null,
            storage: null,
            psu: null,
            casing: null,
            cooler: null
        }]
    }
    const handleForm = e => {
        e.preventDefault()
        dispatch(addProducts(productInfo))
    }
    const handleInput = e => {
        let { name, value, type } = e.target
        type === 'number' && (value = parseInt(value))
        name === 'status' ?
            productInfo[name] = e.target.checked
            :
            productInfo[name] = value
    }
    const handleSpecInput = e => {
        let { name, value } = e.target
        productInfo['spec'][0][name] = value
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleForm}>
                    <Row className="my-3">
                        <Form.Group as={Col} controlId="model">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" name="model" onBlur={handleInput} placeholder="Model" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="brand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" name="brand" onBlur={handleInput} placeholder="Brand Name" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" onBlur={handleInput} placeholder="Price" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" name="rating" onBlur={handleInput} placeholder="Rating" />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name="image" onBlur={handleInput} placeholder="URL of Image" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="status">
                                {/* <Form.Label>Status</Form.Label>
                                <Form.Control type="text" name="status" onBlur={handleInput} placeholder="Status" /> */}
                                <Form.Check
                                    type="switch"
                                    name="status"
                                    onBlur={handleInput}
                                    label="In Stock?"
                                />
                            </Form.Group>

                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="processor">
                                <Form.Label>Processor</Form.Label>
                                <Form.Control type="text" name="processor" onBlur={handleSpecInput} placeholder="Processor" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="motherboard">
                                <Form.Label>Motherboard</Form.Label>
                                <Form.Control type="text" name="motherboard" onBlur={handleSpecInput} placeholder="otherboard" required />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="ram">
                                <Form.Label>Ram</Form.Label>
                                <Form.Control type="text" name="ram" onBlur={handleSpecInput} placeholder="Ram" required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="graphics">
                                <Form.Label>Graphics</Form.Label>
                                <Form.Control type="text" name="graphics" onBlur={handleSpecInput} placeholder="Graphics" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="storage">
                                <Form.Label>Storage</Form.Label>
                                <Form.Control type="text" name="storage" onBlur={handleSpecInput} placeholder="Storage" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="psu">
                                <Form.Label>PSU</Form.Label>
                                <Form.Control type="text" name="psu" onBlur={handleSpecInput} placeholder="Power Supply Unit" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="casing">
                                <Form.Label>Casing</Form.Label>
                                <Form.Control type="text" name="casing" onBlur={handleSpecInput} placeholder="Casing" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="cooler">
                                <Form.Label>Cooler</Form.Label>
                                <Form.Control type="text" name="cooler" onBlur={handleSpecInput} placeholder="Cooler" />
                            </Form.Group>
                        </Row>
                    </Row>
                    <Button className='d-block ms-auto' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;