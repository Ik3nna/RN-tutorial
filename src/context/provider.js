import React, { useReducer, useContext, useState } from "react";
import Auth from "./reducers/auth";
import authInitialState from "./initialState/auth-state";
import Contacts from "./reducers/contacts";
import contactsInitialState from "./initialState/contact-state";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children })=>{
    const [ authState, authDispatch ] = useReducer(Auth, authInitialState);
    const [ contactsState, contactsDispatch ] = useReducer(Contacts, contactsInitialState);
    const [ loggedIn, setIsLoggedIn ] = useState(false); 

    return(
        <GlobalContext.Provider value={{
            authState, 
            authDispatch, 
            contactsState, 
            contactsDispatch,
            loggedIn,
            setIsLoggedIn
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}