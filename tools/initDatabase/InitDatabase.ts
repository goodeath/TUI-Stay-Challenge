import fs from 'fs';
import path from 'path';
import { Hotel } from '../../src/models/Hotel';
import { HotelOffer } from '../../src/models/HotelOffer';
import {
    connectToDb,
    disconnect,
    dropDatabase,
} from '../../src/config/database';

(async () => {
    await connectToDb();
    await dropDatabase();
    console.log('Database creation started');

    const hotels: any[] = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, '..', '..', 'collections', 'hotel.json'),
            {
                encoding: 'utf8',
            }
        )
    ).map((data: any) => {
        delete data['_id'];
        return data;
    });

    const hotelOffers: any[] = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, '..', '..', 'collections', 'hotel-offer.json'),
            {
                encoding: 'utf8',
            }
        )
    ).map((data: any) => {
        delete data['_id'];
        data.total = parseFloat(data.total);
        return data;
    });
    let promises = [];
    promises.push(
        new Promise((res, rej) => {
            Hotel.collection.insertMany(hotels, (err, result) => {
                if (err) rej(err);
                res(result);
            });
        })
    );
    promises.push(
        new Promise((res, rej) => {
            HotelOffer.collection.insertMany(hotelOffers, (err, result) => {
                if (err) rej(err);
                res(result);
            });
        })
    );

    await Promise.all(promises);
    console.log('Database creation finished');
    await disconnect();
})();
