import { Header } from "../Header";
import { Container, Content } from "./styles";

import { FiLogIn } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

export function Login() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const { handleLogin, user } = useContext(AuthContext);

    useEffect(() => {
        if(user?.admin){
            navigate("/admin", { replace: true });
        } else {
            navigate('/dashboard', { replace: true })
        }
    
        if (!user){
            navigate('/', { replace: true })
        }
    }, [user])

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