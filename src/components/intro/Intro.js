import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './intro.scss';

const Intro = () => {
    return (
        <section className="intro">
            <motion.h1
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}>TRISTAN DAUVERGNE</motion.h1>
            <Link to="about" smooth={true} duration={1000}>
                <button className="nav-btn">Scroll down</button>
            </Link>
        </section>
    )
};

export default Intro;
