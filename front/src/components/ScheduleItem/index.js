import { Container } from "./styles";

export function ScheduleItem(props) {
    return (
        <Container>
            {props?.admin && (
                <div>
                    <span>Agendado por</span>
                    <h4>Diogo Paes</h4>
                </div>
            )}
            <div>
                <span>Barbeiro</span>
                <h4>João Filho</h4>
            </div>
            <div>
                <span>Procedimento</span>
                <h4>barba</h4>
            </div>
            <div>
                <span>Dia/Horário</span>
                <h4>27/01 ás 09:30</h4>
            </div>
            {!props?.admin && (
                <button>
                    cancelar agendamento
                </button>
            )}
        </Container>
    )
}