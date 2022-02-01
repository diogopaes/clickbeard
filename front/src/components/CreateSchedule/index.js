import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { Header } from "../Header";
import { Container, Content } from "./styles";

import Moment from 'moment';

import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";

import toast from 'react-hot-toast';

export function CreateSchedule() {
    const { signOut, user } = useContext(AuthContext);
    const { register, watch, handleSubmit} = useForm();

    const [barbers, setBarbers] = useState();
    const [barberSelected, setBarberSelectd] = useState();
    const [ today, setToday ] = useState();

    const navigate = useNavigate();

    async function handleGetBarbers(data) {

        try {
            const response = await api.get('barber/');

            if (response.status === 200) {
                setBarbers(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getOptions = async () => {
        if(watch('id_barber')) {
            const barber = await api.get(`barber/${watch('id_barber')}`);
            const options = barber.data.specialties.split(', ')
            setBarberSelectd(options);
            console.log(options);
        }
    }

    useEffect(() => {
        getOptions();
    }, [watch('id_barber')]);

    async function handleSubmitSchedule(data) {

        try {
            const payload = {
                ...data,
                id_user: user.id,
            }
    
            const token = localStorage.getItem('@clickbeard:token');
    
            api.defaults.headers.common.authorization = `Bearer ${token}`;
    
            const register = await api.post('schedules', payload);
    
            if(register.status === 200) {
                toast.success('Agendamento realizado com sucesso');
                navigate('/dashboard')
            }
        } catch (error) {
            toast.error("Infelizmente esse horário já foi reservado ;(");
        }
    }

    useEffect(() => {
        const dateToday = Moment(new Date()).format('YYYY-MM-DD')
        setToday(dateToday);
    }, [today])

    return (
        <>
            <Header loged />
            <Container>
                <header>
                    <Link to="/admin"><FiArrowLeft/> Voltar</Link>
                    <button onClick={() => signOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h1>Escolha um dia </h1>
                    <form onSubmit={handleSubmit(handleGetBarbers)}>
                        <input type="date" {...register("date")} min={today} placeholder="Selecione o dia" />
                        <select {...register("hour")} id="hour">
                            <option>Selecione um horário</option>
                            <option value="08:00">08:00</option>
                            <option value="08:20">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                        </select>

                        <button type="submit" className="btn">Buscar</button>
                    </form>
                    {barbers && (
                        <>
                            <h1>Barbeiros disponíveis</h1>
                            <form className="barbers" onSubmit={handleSubmit(handleSubmitSchedule)}>

                                <select {...register('id_barber')}>
                                    <option defualt>Selecione o Barbeiro</option>
                                    {barbers?.map(value => {
                                        return (
                                            <option key={value.id} value={value.id}>
                                            {value.name}
                                            </option>
                                        )
                                    })}
                                </select>

                                <select {...register('procedure')}>
                                    <option defualt>Selecione o Procedimento</option>
                                    {barberSelected?.map(value => {
                                        return (
                                            <option key={value} value={value}>
                                            {value}
                                            </option>
                                        )
                                    })}
                                </select>

                                <button type="submit" className="btn">Agendar</button>
                            </form>
                        </>
                    )}
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}