import { prisma } from "../../database/prismaClient";

export class GetBarber {
    async execute({ id }) {
        const barber = await prisma.barber.findFirst({
            where: {
                id
            }
        });

        if(!barber){
            throw new Error("Barber not exists!")
        }
 
        return barber;
    }
}