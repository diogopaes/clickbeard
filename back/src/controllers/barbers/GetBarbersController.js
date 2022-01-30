import { GetBarbers } from "../../modules/barbers/GetBarbers";

export class GetBarbersController {
    async handle(request, response) {
        const getBarbers = new GetBarbers();
        const result = await getBarbers.execute();

        return response.json(result);
    }
}