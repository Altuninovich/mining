import {createContext} from 'react';


export const AuthContext = createContext({
    isAuthenticated: false,
}) 

/*
function noop() {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
})
*/