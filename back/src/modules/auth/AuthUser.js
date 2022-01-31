import { compare } from 'bcrypt';
import { prisma } from '../../database/prismaClient';
import { sign } from 'jsonwebtoken';

export class AuthUser {
    async execute({ email, password }) {
        // Verificar se email existe
        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        });

        if (!user) {
            throw new Error("Email or password invalid!")
        }
        // Verificar se password corresponde ao email
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password invalid!")
        }
        // Gerar token
        const token = sign({ email }, process.env.MD5_Hash, {
            subject: user.id,
            expiresIn: "1d",
        })
        
        newUser.password = '';

        const newUser = {
            user: {...user},
            token,
        }


        return newUser;

    }
}