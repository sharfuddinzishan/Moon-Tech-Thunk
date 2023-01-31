import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <NavLink className='btn btn-primary rounded-0 text-decoration-none text-light fs-3 fw-bold' to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className='btn btn-primary rounded-0 text-decoration-none text-light fs-4' to='add-product'>Add Product</NavLink>
                <NavLink className='btn btn-primary rounded-0 text-decoration-none text-light fs-4' to='list-product'>List Product</NavLink>
                <NavLink className='btn btn-info rounded-0 text-decoration-none text-light fs-4' to='/'>HomePage</NavLink>
            </Nav>
        </>
    );
};

export default Sidebar;