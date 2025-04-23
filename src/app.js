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

app.all('*', (req, res, next) => {
  const error = new ErrorResponse('Route not found. Check url or method', 404);
  next(error); 
});

app.use(errorHandler);

export default app;