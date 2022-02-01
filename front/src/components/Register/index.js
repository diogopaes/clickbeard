import { Header } from "../Header";
import { Container, Content } from "./styles";

import { FiUserPlus } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form';
import { api } from "../../services/api";

import toast from 'react-hot-toast';

export function Register() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const navigate = useNavigate();

    async function handleSubmitRegister(data) {
        try {
            const payload = {
                ...data,
                admin: false
            }

            const register = await api.post('user', payload);

            if (register.status === 200) {
                toast.success('Cadastro realizado com sucesso!')
                navigate('/dashboard')
            } else{
                toast.error('Erro ao tentar fazer cadastro!')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Header/>
            <Container>
                <Content>
                    <h1><FiUserPlus />Cadastre-se</h1>
                    {errors.exampleRequired && <span>Campo Obrigatório</span>}
                    <form onSubmit={handleSubmit(handleSubmitRegister)}>
                        <input type="text" {...register('name', {required: true})} placeholder="Nome" />
                        <input type="email" {...register('email', {required: true})} placeholder="Email" />
                        <input type="text" {...register('password', { minLength: 6, required: true })} placeholder="Password" />
                        
                        <button type="submit" className="btn">Cadastrar</button>
                    </form>
                </Content>
                <p>Já tem conta? <Link to="/">Conecte-se</Link></p>
            </Container>
        </>
    )
}