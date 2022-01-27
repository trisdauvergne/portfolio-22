import React, { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import './intro.scss';

const Intro = () => {
    const data = useContext(StateContext);
    console.log('context', data);
    return (
        <section className="intro">
            <h1>TRISTAN DAUVERGNE</h1>
        </section>
    )
};

export default Intro;
