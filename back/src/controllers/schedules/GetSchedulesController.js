import { GetSchedules } from "../../modules/schedules/GetSchedules";

export class GetSchedulesController {
    async handle(request, response) {
        const getSchedules = new GetSchedules();
        const result = await getSchedules.execute({});

        return response.json(result);
    }
};