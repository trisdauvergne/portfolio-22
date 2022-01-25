import React, { createContext } from 'react';
// import { StaticQuery, graphql } from 'gatsby';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const test = 'testing';

    return (
        <DataContext.Provider value={{
            test
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext;