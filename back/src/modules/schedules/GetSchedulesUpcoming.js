import { prisma } from "../../database/prismaClient";

export class GetSchedulesUpcoming {
    async execute({noday}) {

        const schedules = await prisma.scheduling.findMany({
            where: {
                NOT: {
                    date: noday
                }
            },
            include: {
                user: true,
                barber: true,
            },
        });

        return schedules;
    }
};