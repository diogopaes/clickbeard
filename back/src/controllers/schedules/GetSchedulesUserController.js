import { GetSchedulesUser } from "../../modules/schedules/GetSchedulesUser";

export class GetSchedulesUserController {
    async handle(request, response) {
        const { id } = request.params;

        const getSchedulesUser = new GetSchedulesUser();
        const result = await getSchedulesUser.execute(id);

        return response.json(result);
    }
};