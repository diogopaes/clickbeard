import { prisma } from "../../database/prismaClient";

export class CreateSchedules {
    async execute({id_user, id_barber, date, hour, procedure}) {
        const asDate = await prisma.scheduling.findFirst({
            where: {
                date,
            }
        });

        const asHour = await prisma.scheduling.findFirst({
            where: {
                hour,
            }
        });

        if (asDate && asHour) {
            throw new Error('Infelizmente esse horário já foi reservado ;(')
        };


        // Criar Agendamento
        const schedules = await prisma.scheduling.create({
            data: {
                id_user, 
                id_barber, 
                date,
                hour,
                procedure
            }
        });

        return schedules;
    }
}