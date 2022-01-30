import { prisma } from "../../database/prismaClient";

export class GetBarbers {
    async execute() {
        const barbers = await prisma.barber.findMany();

        return barbers;
    }
}