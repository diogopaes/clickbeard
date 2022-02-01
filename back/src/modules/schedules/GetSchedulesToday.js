import { prisma } from "../../database/prismaClient";

export class GetSchedulesToday {
    async execute({day}) {

        const schedules = await prisma.scheduling.findMany({
            where: {
                date: day
            },
            include: {
                user: true,
                barber: true,
            },
        });

        return schedules;
    }
};