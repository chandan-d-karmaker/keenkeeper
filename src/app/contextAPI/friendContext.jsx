'use client';
import React, { createContext } from 'react';

export const friendContext = createContext();
const friendPromise = fetch('/friends.json').then(res => res.json());

const FriendContextProvider = ({ children }) => {

    return (
        <friendContext.Provider value={friendPromise}>
            {children}
        </friendContext.Provider>
    );
};

export default FriendContextProvider;
        

