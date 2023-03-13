import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './database/config';
import { userRoutes } from './routes';

dotenv.config();
const app = express();
dbConnect();

app.use( cors({ origin: "*" }));
app.use( express.json());

app.use( '/api/auth', userRoutes );

const port = process.env.PORT || 3001;
app.listen( port, () => {
  console.log(`Server running on port http://localhost:${port}`);
})