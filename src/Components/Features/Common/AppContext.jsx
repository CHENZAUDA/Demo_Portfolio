import React, { createContext, useContext } from 'react';
export const AppContext = createContext({});
export const ContextProvider = AppContext.Provider;
export function Context() {
    return useContext(AppContext);
}
