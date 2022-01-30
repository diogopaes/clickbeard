import { prisma } from "../../database/prismaClient";

export class GetSchedules {
    async execute() {
        const schedules = await prisma.scheduling.findMany();

        return schedules;
    }
};