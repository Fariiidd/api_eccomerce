import 'dotenv/config'
import express from 'express';
import { router } from './routes/item.';

const PORT = process.env.PORT || 3001;
const app = express();

app.use("/", router);

app.listen(PORT, () => console.log(`Port listening in ${PORT}`));