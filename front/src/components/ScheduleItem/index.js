import { Container } from "./styles";
import { parseISO, format } from 'date-fns';
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function ScheduleItem({schedule, handleCancelSchedule}) {

    const { user } = useContext(AuthContext);

    const parsedDate = parseISO(schedule.date);
    const formattedDate = format(
        parsedDate, 
        "'Dia' dd 'de' MMM'"
      );

    return (
        <Container>
            {user?.admin && (
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
                <h4>{formattedDate} ás {schedule.hour}</h4>
            </div>
            {!user?.admin && (
                schedule?.status === 'active' ? (
                    <button onClick={handleCancelSchedule}>
                        cancelar agendamento
                    </button>
                ) : (
                    <button disabled onClick={handleCancelSchedule}>
                        cancelar agendamento
                    </button>
                )
            )}
        </Container>
    )
}