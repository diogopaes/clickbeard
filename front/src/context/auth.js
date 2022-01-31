import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState();

    async function handleLogin(data) {
        const login = await api.post('auth', data)

        const { token, user } = login.data;

        localStorage.setItem('@clickbeard:token', token);

        setUser(user);
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@clickbeard:token');

        window.navigator('/')
    }

    useEffect(() => {
        const token = localStorage.getItem('@clickbeard:token');

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get('profile').then(response => {
                setUser(response.data);
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, handleLogin, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}