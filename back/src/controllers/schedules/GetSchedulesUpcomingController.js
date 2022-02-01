import { GetSchedulesUpcoming } from "../../modules/schedules/GetSchedulesUpcoming";

export class GetSchedulesUpcomingController {
    async handle(request, response) {
        const { noday } = request.params;

        const getSchedules = new GetSchedulesUpcoming();
        const result = await getSchedules.execute({noday});

        return response.json(result);
    }
};