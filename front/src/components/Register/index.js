import { Header } from "../Header";
import { Container, Content } from "./styles";

import { FiUserPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Register() {
    return (
        <>
            <Header/>
            <Container>
                <Content>
                    <h1><FiUserPlus />Cadastre-se</h1>
                    <form>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />

                        <button type="submit" className="btn">Cadastrar</button>
                    </form>
                </Content>
                <p>Já tem conta? <Link to="/">Conecte-se</Link></p>
            </Container>
        </>
    )
}