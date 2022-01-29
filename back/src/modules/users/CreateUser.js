import { prisma } from "../../database/prismaClient";
import { hash } from "bcrypt";

export class CreateUser {
    async execute({email, password, admin, name}){
        // Validar se o user existe
        const userExist = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (userExist) {
            throw new Error("User aready exits!")
        }
        // Criptografar a senha
        const passwordCryted = await hash(password, 10);

        // Salva o user
        const user = await prisma.user.create({
            data: {
                email,
                password: passwordCryted,
                admin,
                name, 
            }
        })

        return user;

    }
}