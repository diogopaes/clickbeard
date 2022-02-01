import { useContext, useEffect, useState } from "react";
import Moment from 'moment';
import { Header } from "../Header";
import { Container, Content, Barbers } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Schedules } from "../Dashboard/styles";
import { ScheduleItem } from "../ScheduleItem";
import { BarberItem } from "../BarberItem";
import { api } from "../../services/api";
import { AuthContext } from "../../context/auth";

import toast from 'react-hot-toast';

export function Admin() {
    const { signOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user){
            if(user.admin){
                navigate("/admin", { replace: true });
            } else {
                navigate("/dashboard", { replace: true });
            }
        } else {
            navigate('/', { replace: true })
        }
    }, [])

    const [ schedulesToday, setSchedulesToday ] = useState([]);
    const [ schedulesUpcoming, setSchedulesUpcoming ] = useState([]);

    const [ barbers, setBarbers ] = useState([]);

    async function getSchedules() {
        const token = localStorage.getItem('@clickbeard:token');

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const dateToday = Moment(new Date()).format('YYYY-MM-DD')

        await api.get(`/schedules/today/${dateToday}`).then(response => setSchedulesToday(response.data));
        await api.get(`/schedules/upcoming/${dateToday}`).then(response => setSchedulesUpcoming(response.data));
    }

    useEffect(() => {
        getSchedules();

        api.get("/barber").then(response => setBarbers(response.data));
    }, []);

    async function removeBarber(id, name) {
        try {
            const response = await api.delete(`/barber/${id}`);

            if (response){
                toast.success(`Barbeiro ${name} removido com sucesso!`)
                window.location.reload();
            }
        } catch (error) {
            toast.error('Erro ao tentar deletar barbeiro!')
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
                    <button onClick={() => signOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h2>Agendamentos de hoje</h2>
                    {schedulesToday.length ? (
                        <>
                            <Schedules>
                                {schedulesToday.map(schedule => {
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
                        </div>
                    )}
                    <h2>Próximos agendamentos</h2>
                    {schedulesUpcoming.length ? (
                        <>
                            <Schedules>
                                {schedulesUpcoming.map(schedule => {
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