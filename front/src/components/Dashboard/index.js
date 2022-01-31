import { Header } from "../Header";
import { Container, Content, Schedules } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ScheduleItem } from "../ScheduleItem";

export function Dashboard() {

    const agendamentos = {
        id_user: "",
    }

    function handleLoginOut() {
    console.log("loginout")
    }

    return (
        <>
            <Header loged />
            <Container>
                <header>
                    <h2>Olá, <span>Diogo Paes</span> bem vindo.</h2>
                    <button onClick={() => handleLoginOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h2>Agendamentos <Link className="btn" to="/">Agendar novo horário</Link></h2>
                    {agendamentos ? (
                        <>
                            <Schedules>
                                <ScheduleItem/>
                                <ScheduleItem/>
                            </Schedules>
                        </>
                    ) : (
                        <div styles={{ textAlign: "center" }}>
                            <h4>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/">Agendar horário</Link>
                        </div>
                    )}
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}