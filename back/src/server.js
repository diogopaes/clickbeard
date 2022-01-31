import express from "express";
import "express-async-errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err, request, response, next) => {
        if (err instanceof Error) {
            return response.status(400).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Inernal server error",
        });
    }
)

app.listen(3001, () => console.log('Server is running'));