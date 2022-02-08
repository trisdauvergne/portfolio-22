import React from 'react';
import { Link } from 'react-scroll';
import './nav.scss';

const Nav = () => {
    return (
        <section className="nav">
            
            <Link to="about" smooth={true} duration={1000}>
                <button>About</button>
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
        </section>
    )
}

export default Nav
