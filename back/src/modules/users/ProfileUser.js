import { prisma } from "../../database/prismaClient";

export class ProfileUser {
    async execute({id}){
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        user.password = '';

        return user;
    }
}