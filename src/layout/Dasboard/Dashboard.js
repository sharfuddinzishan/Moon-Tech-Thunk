import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <>
            <Container fluid className='ps-0'>
                <Row>
                    <Col md={2}><Sidebar></Sidebar></Col>
                    <Col md={10}><Outlet></Outlet></Col>
                </Row>
            </Container>

        </>
    );
};

export default Dashboard;