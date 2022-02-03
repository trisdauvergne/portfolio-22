import React from 'react';
import { Link } from 'react-scroll';
import './connect.scss';

const Connect = () => {
    return (
        <section className="connect" id="connect">
            <h1 className="section-heading">Connect.</h1>
            <div className="connect-btns">
                <a href="https://www.linkedin.com/in/tristandauvergne/" target="_blank" rel="noreferrer">LinkedIn<span className="material-icons lrg-icon">arrow_right_alt</span></a>
                <a href="https://github.com/trisdauvergne" target="_blank" rel="noreferrer">GitHub<span className="material-icons lrg-icon">arrow_right_alt</span></a>
                <a href="mailto:tristan.dauvergne@gmail.com" target="_blank" rel="noreferrer">Email<span className="material-icons lrg-icon">arrow_right_alt</span></a>
            </div>
            <Link to="about" smooth={true} duration={1000}>
                <button className="nav-btn">Back to top</button>
            </Link>
        </section>
    )
}

export default Connect;
