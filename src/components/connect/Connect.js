import React from 'react';
import './connect.scss';

const Connect = () => {
    return (
        <section className="connect">
            <h1>Connect.</h1>
            <div>
                <a href="https://www.linkedin.com/in/tristandauvergne/" target="_blank" rel="noreferrer">LinkedIn<span className="material-icons lrg-icon">arrow_right_alt</span></a>
                <a href="https://github.com/trisdauvergne" target="_blank" rel="noreferrer">GitHub<span className="material-icons lrg-icon">arrow_right_alt</span></a>
                <a href="mailto:tristan.dauvergne@gmail.com" target="_blank" rel="noreferrer">Email<span className="material-icons lrg-icon">arrow_right_alt</span></a>
            </div>
        </section>
    )
}

export default Connect;
