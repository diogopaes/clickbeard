import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { Header } from "../Header";
import { Container, Content } from "./styles";

export function CreateSchedule() {

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
                    <h1>Escolha um dia </h1>
                    <form>
                        <input type="date" placeholder="Selecione o dia e hora" />
                        <select name="hour" id="hour">
                            <option value="08:00">08:00</option>
                            <option value="08:00">08:30</option>
                            <option value="08:00">09:00</option>
                            <option value="08:00">09:30</option>
                            <option value="08:00">10:00</option>
                            <option value="08:00">10:30</option>
                            <option value="08:00">11:00</option>
                            <option value="08:00">11:30</option>
                            <option value="08:00">13:00</option>
                            <option value="08:00">13:30</option>
                            <option value="08:00">14:00</option>
                            <option value="08:00">14:30</option>
                            <option value="08:00">15:00</option>
                            <option value="08:00">15:30</option>
                            <option value="08:00">16:00</option>
                            <option value="08:00">16:30</option>
                            <option value="08:00">17:00</option>
                            <option value="08:00">17:30</option>
                        </select>

                        <button type="submit" className="btn">Buscar</button>
                    </form>
                    <h1>Barbeiros disponíveis</h1>
                    <form className="barbers">

                        <select name="procedures" id="procedures">
                            <option value="barba">barba</option>
                            <option value="cabelo">cabelo</option>
                            <option value="bigode">bigode</option>
                        </select>

                        <button type="submit" className="btn">Agendar</button>
                    </form>
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}