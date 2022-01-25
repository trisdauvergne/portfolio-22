import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Intro = () => {
    const data = useContext(DataContext);
    console.log('context', data);
    return (
        <section>
            <h1>TRISTAN DAUVERGNE</h1>
        </section>
    )
}

export default Intro
