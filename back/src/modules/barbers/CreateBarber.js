import { prisma } from "../../database/prismaClient";

export class CreateBarber {
    async execute({ name, age, date_of_hiring, specialties }) {
        // Verificar se nome existe
        const nameExists = await prisma.barber.findFirst({
            where: {
                name
            }
        })

        if (nameExists) {
            throw new Error("Name aready exist!")
        }

        // Salva o barbeiro
        const barber = await prisma.barber.create({
            data: {
                name, 
                age, 
                date_of_hiring, 
                specialties
            }
        })

        return barber;
    }
}