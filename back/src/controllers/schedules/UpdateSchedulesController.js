import { UpdateSchedules } from "../../modules/schedules/UpdateSchedules";


export class UpdateSchedulesController {
    async handle(request, response) {
        const { status } = request.body;
        const { id } = request.params;

        const updateSchedules = new UpdateSchedules();
        const result = await updateSchedules.execute({
            id,
            status
        });

        return response.json(result);
    };
}