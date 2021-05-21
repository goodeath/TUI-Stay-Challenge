import express from 'express';
import helmet from 'helmet';
import { connectToDb } from './config/database';
import { HotelOfferRouter } from './routers/hotelOfferRouter';
import { HotelRouter } from './routers/hotelRouter';

const PORT = 4000;
const app = express();

app.use(helmet());

app.use('/hotels', HotelRouter);
app.use('/offers', HotelOfferRouter);

app.listen(PORT, async () => {
    await connectToDb();
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
