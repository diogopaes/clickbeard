import { DeleteBarbers } from "../../modules/barbers/DeleteBarbers";


export class DeleteBarberController {
    async handle(request, response) {
        const { id } = request.params;

        const deleteBarber = new DeleteBarbers();

        const result = await deleteBarber.execute({
            id
        });

        return response.json(result);
    }
}