import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

import toast from 'react-hot-toast';

export const AuthContext = createContext({});

export function AuthProvider(props) {
    const [user, setUser] = useState();

    const navigate = useNavigate();

    async function handleLogin(data) {
        try {
            const login = await api.post('auth', data)

            const { token, user } = login.data;

            localStorage.setItem('@clickbeard:token', token);

            setUser(user);
        } catch (error) {
            toast.error('Email ou senha incorreto!');
        }
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@clickbeard:token');

        navigate('/')
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