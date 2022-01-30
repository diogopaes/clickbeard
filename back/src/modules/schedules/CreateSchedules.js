import { prisma } from "../../database/prismaClient";

export class CreateSchedules {
    async execute({id_user, id_barber, date, procedure}) {
        // Criar Agendamento
        const schedules = await prisma.scheduling.create({
            data: {
                id_user, 
                id_barber, 
                date, 
                procedure
            }
        });

        return schedules;
    }
}