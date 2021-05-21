import { connect, connection } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const connectToDb = async () => {
    return connect(
        `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin',
        }
    );
};

export const dropDatabase = async () => {
    return connection.db.dropDatabase();
};

export const disconnect = async () => {
    return connection.close();
};
