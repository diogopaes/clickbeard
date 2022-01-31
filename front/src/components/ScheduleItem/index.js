import { Container } from "./styles";

export function ScheduleItem({schedule, handleCancelSchedule}) {
    return (
        <Container>
            {schedule?.admin && (
                <div>
                    <span>Agendado por</span>
                    <h4>{schedule.user.name}</h4>
                </div>
            )}
            <div>
                <span>Barbeiro</span>
                <h4>{schedule.barber.name}</h4>
            </div>
            <div>
                <span>Procedimento</span>
                <h4>{schedule.procedure}</h4>
            </div>
            <div>
                <span>Dia/Horário</span>
                <h4>{schedule.date} ás {schedule.hour}</h4>
            </div>
            {!schedule?.admin && (
                <button onClick={handleCancelSchedule}>
                    cancelar agendamento
                </button>
            )}
        </Container>
    )
}