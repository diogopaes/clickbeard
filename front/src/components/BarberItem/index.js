import Moment from 'moment';
import { Container } from "./styles";

export function BarberItem({barber, removeBarber}) {

    return (
        <Container>
            <div>
                <span>Nome</span>
                <h4>{barber.name}</h4>
            </div>
            <div>
                <span>Especialidades</span>
                <h4>{barber.specialties}</h4>
            </div>
            <div>
                <span>Data de início</span>
                <h4>
                    {Moment(barber.date_of_hiring).format('d MMM YYYY')}
                </h4>
            </div>

            <button onClick={removeBarber}>Remover</button>
        </Container>
    )
}