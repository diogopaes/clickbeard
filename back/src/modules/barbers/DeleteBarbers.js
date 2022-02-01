import { prisma } from "../../database/prismaClient";

export class DeleteBarbers {
    async execute({id}) {
        await prisma.scheduling.deleteMany({
            where: {
                id_barber: id
            }
        });

        const barber = await prisma.barber.delete({
            where: {
                id
            }
        });

        return barber;
    }
}