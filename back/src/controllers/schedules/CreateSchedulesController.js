import { CreateSchedules } from "../../modules/schedules/CreateSchedules";

export class CreateSchedulesController {
    async handle(request, response) {
        const { id_barber, date, hour, procedure } = request.body;
        const { id_user } = request;

        const createSchedules = new CreateSchedules();
        const result = await createSchedules.execute({
            id_user, 
            id_barber,
            date,
            hour,
            procedure
        })

        return response.json(result);
    } 
}