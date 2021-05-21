import fs from 'fs';
import path from 'path';
import { connect as connectDB, connection } from 'mongoose';
import dotenv from 'dotenv';
import { Hotel } from '../src/models/Hotel';
import { HotelOffer } from '../src/models/HotelOffer';
dotenv.config();

const {
    DB_TEST_HOST,
    DB_TEST_USER,
    DB_TEST_PASSWORD,
    DB_TEST_NAME,
} = process.env;
console.log(
    `mongodb://${DB_TEST_USER}:${DB_TEST_PASSWORD}@${DB_TEST_HOST}:27017/${DB_TEST_NAME}`
);
const connect = async () => {
    return connectDB(
        `mongodb://${DB_TEST_USER}:${DB_TEST_PASSWORD}@${DB_TEST_HOST}:27017/${DB_TEST_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin',
        }
    );
};

const disconnect = async () => {
    connection.close();
};

export const beforeTestSuit = async () => {
    await connect();
    await connection.db.dropDatabase();

    const hotels: any[] = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, '..', 'collections', 'hotel.json'),
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
            path.join(__dirname, '..', 'collections', 'hotel-offer.json'),
            {
                encoding: 'utf8',
            }
        )
    ).map((data: any) => {
        delete data['_id'];
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
    console.log('Test Database Configured');
};

export const afterTestSuit = async () => {
    await disconnect();
    console.log('Disconnected from test database');
};
