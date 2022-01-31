import { prisma } from "../../database/prismaClient";

export class GetSchedules {
    async execute() {
        const schedules = await prisma.scheduling.findMany({
            include: {
                user: true,
                barber: true,
            },
        });

        return schedules;
    }
};