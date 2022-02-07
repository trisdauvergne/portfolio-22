import React from 'react';
import { Link } from 'react-scroll';
import './intro.scss';

const Intro = () => {
    return (
        <section className="intro">
            <h1>TRISTAN DAUVERGNE.</h1>
            <Link to="about" smooth={true} duration={1000}>
                <button className="nav-btn">Scroll down</button>
            </Link>
        </section>
    )
};

export default Intro;
