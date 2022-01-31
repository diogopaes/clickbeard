import { GetBarber } from "../../modules/barbers/GetBarber";

export class GetBarberController {
    async handle(request, response) {
        const { id } = request.params;

        const getBarber = new GetBarber();

        const result = await getBarber.execute({
            id
        });

        return response.json(result);
    }
}