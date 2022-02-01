import { GetSchedulesToday } from "../../modules/schedules/GetSchedulesToday";

export class GetSchedulesTodayController {
    async handle(request, response) {

        const { day } = request.params;

        const getSchedules = new GetSchedulesToday();
        const result = await getSchedules.execute({day});

        return response.json(result);
    }
};