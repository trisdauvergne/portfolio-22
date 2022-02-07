import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/state';
import '../styles/layout.scss';
 
const Layout = ({ children }) => {
    const { value } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
            { children }
        </div>
    )
};

export default Layout
