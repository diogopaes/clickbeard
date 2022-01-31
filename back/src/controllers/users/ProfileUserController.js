import { ProfileUser } from "../../modules/users/ProfileUser";

export class ProfileUserController {
    async handle(request, response) {

        const { id } = request;

        const profileUser = new ProfileUser();
        const result = await profileUser.execute({id})

        return response.json(result);

    }
}