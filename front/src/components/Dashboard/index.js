import { Header } from "../Header";
import { Container, Content, Schedules } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ScheduleItem } from "../ScheduleItem";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Dashboard() {

    const [ schedules, setSchedules ] = useState([]);

    useEffect(() => {
        api.get("/schedules", {
            headers: "",
        }).then(response => setSchedules(response.data));
    }, []);

    function handleLoginOut() {
        console.log("loginout")
    }

    const handleCancelSchedule = async (id) => {
        try {
            const payload = {
                status: "canceled",
            }

            const response = api.put(`/schedules/${id}`, payload, {
                headers: ""
            });

            return response;
        } catch (err) {
            console.log(err);
        }
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
                    <h2>Agendamentos 
                        {schedules.length ? (
                            <Link className="btn" to="/">Agendar novo horário</Link>
                        ) : ('')}
                    </h2>
                    {schedules.length ? (
                        <>
                            <Schedules>
                                {schedules.map(schedule => {
                                    return (
                                        <ScheduleItem
                                            schedule
                                            handleCancelSchedule={() => handleCancelSchedule(schedule.id)}
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
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}