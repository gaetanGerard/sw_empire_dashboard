import React, { createContext, useState, FC, ReactNode } from 'react';
import { UserContextState, USER } from '../types';

// Import user Data
import data from '../../data/user.json';

const contextDefaultValue: UserContextState = {
    user: null,
    loginError: null,
    login: () => {},
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<UserContextState>(contextDefaultValue);

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<USER|null>(null);
    const [loginError, setLoginError] = useState<string|null>(null)

    const login = (user: any) => {
        if(data.username === user.username && data.password === user.password) {
            setUser(user);
        } else {
            setUser(null);
            setLoginError('Invalid username or password');
        }
    };

    return (
        <AuthContext.Provider value={{user, loginError, login}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;