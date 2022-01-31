import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { Header } from "../Header";
import { Container, Content } from "./styles";

export function CreateBarber() {

    function handleLoginOut() {
        console.log("loginout")
    }

    return (
        <>
            <Header loged />
            <Container>
                <header>
                    <button onClick={() => handleLoginOut()} >
                        <FiArrowLeft/> Voltar
                    </button>
                    <button onClick={() => handleLoginOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h1>Cadastrar barbeiro</h1>
                    <form className="barbers">
                        <input type="text" name="name" placeholder="Nome" />
                        <input type="date" name="name" placeholder="Data de contratação" />

                        <input type="text" name="procedures" placeholder="Procedimentos" />

                        <button type="submit" className="btn">Cadastrar</button>
                    </form>
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}