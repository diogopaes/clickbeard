import { Header } from "../Header";
import { Container, Content } from "./styles";

import { FiLogIn } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    async function handleLogin(data) {
        const login = await api.post('auth', data)

        const { token, id, email, admin, name } = login.data

        localStorage.setItem('@clickbeard:token', token);

    }

    return (
        <>
            <Header/>
            <Container>
                <Content>
                    <h1><FiLogIn/>Conecte-se</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input type="email" {...register('email')} placeholder="Email" />
                        <input type="text" {...register('password')} placeholder="Password" />

                        <button type="submit" className="btn">Entrar</button>
                    </form>
                </Content>
                <p>Não tem conta? <Link to="/register">Cadastrar</Link></p>
            </Container>
        </>
    )
}