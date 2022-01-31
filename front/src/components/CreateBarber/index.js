import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { Container, Content } from "./styles";

import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export function CreateBarber() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    function handleLoginOut() {
        console.log("loginout")
    }

    async function handleSubmitForm(data) {
        try {
            const register = await api.post('barber', data);

            if (register.status === 200) {
                alert('Cadastro realizado com sucesso!')
                navigate("/admin");
            } else {
                alert('Erro ao tentar cadastrar barbeiro!')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Header loged />
            <Container>
                <header>
                    <Link to="/admin"><FiArrowLeft/> Voltar</Link>
                    <button onClick={() => handleLoginOut()} >
                        <FiLogOut/>
                    </button>
                </header>
                <Content>
                    <h1>Cadastrar barbeiro</h1>
                    <form className="barbers" onSubmit={handleSubmit(handleSubmitForm)}>
                        <input type="text" {...register("name")} placeholder="Nome" />
                        <input type="text" {...register("age")} placeholder="Idade" />
                        <input type="date" {...register("date_of_hiring")} placeholder="Data de contratação" />

                        <input type="text" {...register("specialties")} placeholder="Especialidades(barba, cabelo, bigode)" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit" className="btn">Cadastrar</button>
                    </form>
                </Content>
                <p>Feito com ❤️ por Diogo Paes</p>
            </Container>
        </>
    )
}