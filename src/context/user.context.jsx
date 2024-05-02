import {createContext, useState} from "react";


export const UserContext = createContext({
    userId: 1
});

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(1);


    return (
        <UserContextProvider value={{userId, setUserId}}>
            {children}
        </UserContextProvider>
    )
}