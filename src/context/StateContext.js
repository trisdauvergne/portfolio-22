import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const test = 'testing';

    return (
        <StateContext.Provider value={{
            test
        }}>
            { children }
        </StateContext.Provider>
    )
}

export default StateContext;