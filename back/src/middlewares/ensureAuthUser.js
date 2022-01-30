import { verify } from "jsonwebtoken";

export async function ensureAuthUser(request, response, next) {
    // verifica se esta passando token
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        response.status(401).json({
            message: "Token missing!",
        })
    }

    // Pega o token
    const [,token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, process.env.MD5_hash);
        
        request.id_user = sub;

        return next();
    } catch (err) {
        response.status(401).json({
            message: "Invalid token",
        })
    }
}