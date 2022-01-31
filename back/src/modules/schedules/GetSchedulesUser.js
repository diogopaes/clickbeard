import { prisma } from "../../database/prismaClient";

export class GetSchedulesUser {
    async execute(id) {
        const schedule = await prisma.scheduling.findMany({
            where: {
                id_user: id
            },
            include: {
                user: true,
                barber: true,
            },
        });

        return schedule;
    }
};