import { Header } from "../Header";
import { Container, Content, Schedules } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ScheduleItem } from "../ScheduleItem";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../context/auth";

export function Dashboard() {
    const { signOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user){
            if(user.admin){
                navigate("/admin", { replace: true });
            }
        } else {
            navigate('/', { replace: true })
        }
    }, [user])

    const [ schedules, setSchedules ] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('@clickbeard:token');

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        api.get(`/schedules/${user.id}`).then(response => setSchedules(response.data));

        console.log(schedules)
    }, []);

    const handleCancelSchedule = async (id) => {
        try {
            const payload = {
                status: "canceled",
            }

            const response = api.put(`/schedules/${id}`, payload);

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
                    <h2>Olá, <span>{user?.name}</span> bem vindo.</h2>
                    <button onClick={() => signOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h2>Agendamentos 
                        {schedules.length ? (
                            <Link className="btn" to="/create-schedule">Agendar novo horário</Link>
                        ) : ('')}
                    </h2>
                    {schedules.length ? (
                        <>
                            <Schedules>
                                {schedules.map(schedule => {
                                    return (
                                        <ScheduleItem
                                            key={schedule.id}
                                            schedule={schedule}
                                        />
                                    )
                                })}
                            </Schedules>
                        </>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <h4 style={{ marginBottom: '20px' }}>Ainda não tem agendamentos</h4>
                            <Link className="btn" to="/create-schedule">Agendar horário</Link>
                        </div>
                    )}
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}