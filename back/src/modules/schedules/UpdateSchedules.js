import { prisma } from "../../database/prismaClient";

export class UpdateSchedules {
    async execute({id, status}) {
        const schedules = await prisma.scheduling.update({
            where: {
                id,               
            },
            data: {
                status
            },
        });

        return schedules;
    }
}