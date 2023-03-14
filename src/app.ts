import 'express-async-errors';
import express from 'express';
import HttpErrorMiddleware from './middlewares/HttpError';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use(HttpErrorMiddleware);

export default app;
