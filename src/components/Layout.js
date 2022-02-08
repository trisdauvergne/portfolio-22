import React from 'react';
import '../styles/layout.scss';
import Nav from '../components/nav/Nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />            
            { children }
        </div>
    )
};

export default Layout
