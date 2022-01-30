import { CreateBarber } from "../../modules/barbers/CreateBarber";

export class CreateBarberController {
    async handle(request, response) {

        const { name, age, date_of_hiring, specialties } = request.body;

        const createBarber = new CreateBarber();
        const result = await createBarber.execute({
            name, 
            age, 
            date_of_hiring, 
            specialties
        })

        return response.json(result);
    }
}