import { CreateUser } from "../../modules/users/CreateUser";

export class CreateUserController {
    async handle(request, response) {

        const { email, password, admin, name } = request.body;

        const createUser = new CreateUser();
        const result = await createUser.execute({
            email,
            password,
            admin,
            name
        })

        return response.json(result);

    }
}