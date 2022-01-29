import { AuthUser } from "../../modules/auth/AuthUser";

export class AuthController {
    async handle(request, response) {

        const { email, password } = request.body;

        const authUser = new AuthUser();
        const result = await authUser.execute({
            email,
            password,
        });

        return response.json(result);
    }
}