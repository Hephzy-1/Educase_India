import express from 'express';
import cors from 'cors';
import schoolRoute from "./routes/school.js";
import errorHandler from "./middlewares/error.js";
import { ErrorResponse } from "./utils/errorResponse.js";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true })); 

app.use('/', schoolRoute);

app.use((req, res, next) => {
  const error = new ErrorResponse(`Route ${req.originalUrl} not found`, 404);
  next(error);
});

app.use(errorHandler);

export default app;