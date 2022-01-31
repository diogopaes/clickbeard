import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Container, Content, Barbers } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Schedules } from "../Dashboard/styles";
import { ScheduleItem } from "../ScheduleItem";
import { BarberItem } from "../BarberItem";
import { api } from "../../services/api";

export function Admin() {

    const [ schedules, setSchedules ] = useState([]);
    const [ barbers, setBarbers ] = useState([]);

    useEffect(() => {
        // Agendamentos
        api.get("/schedules", {
            headers: "",
        }).then(response => setSchedules(response.data));
        // Barbeiros
        api.get("/barber", {
            headers: "",
        }).then(response => setBarbers(response.data));
    }, []);

    function handleLoginOut() {
    console.log("loginout")
    }

    async function removeBarber(id, name) {
        try {
            const response = await api.delete(`/barber/${id}`);

            if (response){
                alert(`Barbeiro ${name} removido com sucesso!`)
            }
        } catch (error) {
            alert(error)
        }
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
                    {schedules.length ? (
                        <>
                            <Schedules>
                                {schedules.map(schedule => {
                                    return (
                                        <ScheduleItem
                                            schedule
                                        />
                                    )
                                })}
                            </Schedules>
                        </>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ marginBottom: '20px' }}>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/">Agendar horário</Link>
                        </div>
                    )}
                    <h2>Próximos agendamentos</h2>
                    {schedules.length ? (
                        <>
                            <Schedules>
                                {schedules.map(schedule => {
                                    return (
                                        <ScheduleItem
                                            schedule
                                        />
                                    )
                                })}
                            </Schedules>
                        </>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ marginBottom: '20px' }}>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/">Agendar horário</Link>
                        </div>
                    )}
                    <h2>Barbeiros 
                        {barbers.length ? (
                            <Link className="btn" to="/create-barber">cadastrar</Link>
                        ) : ('')}
                    </h2>
                    {barbers.length ? (
                        <>
                            <Barbers>
                                {barbers.map(barber => {
                                    return (
                                        <BarberItem
                                            barber={barber}
                                            removeBarber={() => removeBarber(barber.id, barber.name)}
                                        />
                                    )
                                })}
                            </Barbers>
                        </>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ marginBottom: '20px' }}>Ainda não tem barbeiros</h4>
                            <Link className="btn" to="/create-barber">cadastrar</Link>
                        </div>
                    )}
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}