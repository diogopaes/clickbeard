import { Header } from "../Header";
import { Container, Content } from "./styles";

import { FiLogIn } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Login() {
    return (
        <>
            <Header/>
            <Container>
                <Content>
                    <h1><FiLogIn/>Conecte-se</h1>
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />

                        <button type="submit" className="btn">Entrar</button>
                    </form>
                </Content>
                <p>Não tem conta? <Link to="/register">Cadastrar</Link></p>
            </Container>
        </>
    )
}