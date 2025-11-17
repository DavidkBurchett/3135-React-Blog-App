import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({children}) => {
    const[user, Setuser] = useState(null);

    const login = (username) => {
        Setuser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}