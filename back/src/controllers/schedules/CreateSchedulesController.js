import { CreateSchedules } from "../../modules/schedules/CreateSchedules";

export class CreateSchedulesController {
    async handle(request, response) {
        const { id_user, id_barber, date, procedure } = request.body;

        const createSchedules = new CreateSchedules();
        const result = await createSchedules.execute({
            id_user, 
            id_barber, 
            date, 
            procedure
        })

        return response.json(result);
    } 
}