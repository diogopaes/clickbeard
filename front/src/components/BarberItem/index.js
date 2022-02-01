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
            <div style={{ display: "flex"}}>
                <div>
                    <span>Data de início</span>
                    <h4>
                        {Moment(barber.date_of_hiring).format('d MMM YYYY')}
                    </h4>
                </div>
                <div style={{ marginLeft: "40px"}}>
                    <span>Idade</span>
                    <h4>
                        {barber.age}
                    </h4>
                </div>
            </div>

            <button onClick={removeBarber}>Remover</button>
        </Container>
    )
}