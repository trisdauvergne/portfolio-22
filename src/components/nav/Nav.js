import React from 'react';
import { Link } from 'react-scroll';
import './nav.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <Link to="about" smooth={true} duration={1000}>
                    <button className="test">About</button>
                </Link>
                <Link to="projects" smooth={true} duration={1000}>
                    <button>Projects</button>
                </Link>
                <Link to="cv" smooth={true} duration={1000}>
                    <button>CV</button>
                </Link>
                <Link to="connect" smooth={true} duration={1000}>
                    <button>Connect</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
