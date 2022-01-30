import { prisma } from "../../database/prismaClient";

export class DeleteBarbers {
    async execute({id}) {
        const barber = await prisma.barber.delete({
            where: {
                id
            }
        })

        return barber;
    }
}