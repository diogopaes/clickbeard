import { Header } from "../Header";
import { Container, Content, Barbers } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Schedules } from "../Dashboard/styles";
import { ScheduleItem } from "../ScheduleItem";
import { BarberItem } from "../BarberItem";

export function Admin() {

    const agendamentos = {
        id_user: "",
    }

    const barbeiros = {
        name: "",
    }

    function handleLoginOut() {
    console.log("loginout")
    }

    return (
        <>
            <Header loged />
            <Container>
                <header>
                    <h2>Olá, <span>Admin</span> visualize seus agendamentos <br/>
                        e cadastre seus barbeiros.
                    </h2>
                    <button onClick={() => handleLoginOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h2>Agendamentos de hoje</h2>
                    {agendamentos ? (
                        <>
                            <Schedules>
                                <ScheduleItem admin/>
                                <ScheduleItem admin/>
                            </Schedules>
                        </>
                    ) : (
                        <div styles={{ textAlign: "center" }}>
                            <h4>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/">Agendar horário</Link>
                        </div>
                    )}
                    <h2>Próximos agendamentos</h2>
                    {agendamentos ? (
                        <>
                            <Schedules>
                                <ScheduleItem admin/>
                                <ScheduleItem admin/>
                            </Schedules>
                        </>
                    ) : (
                        <div styles={{ textAlign: "center" }}>
                            <h4>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/">Agendar horário</Link>
                        </div>
                    )}
                    <h2>Barbeiros <Link className="btn" to="/">cadastrar</Link></h2>
                    {barbeiros ? (
                        <>
                            <Barbers>
                                <BarberItem/>
                                <BarberItem/>
                            </Barbers>
                        </>
                    ) : (
                        <div styles={{ textAlign: "center" }}>
                            <h4>Ainda não tem barbeiros</h4>
                            <Link className="btn" to="/">cadastrar</Link>
                        </div>
                    )}
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}