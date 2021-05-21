import { model, Schema, Model, Document } from 'mongoose';

export interface HotelOfferDocument extends Document {
    id: string;
    adults: number;
    available: boolean;
    roomQuantity: number;
    total: number;
    hotel: {
        id: string;
        name: string;
        rating: number;
        cityCode: string;
    };
}

const HotelOfferSchema: Schema = new Schema(
    {
        id: { type: String, required: true },
        adults: { type: Number, required: true },
        roomQuantity: { type: Number, required: true },
        total: { type: Number, required: true },
        available: { type: Boolean, required: true },
        hotel: {
            id: String,
            name: String,
            cityCode: String,
            rating: Number,
        },
    },
    { collection: 'hotel-offer' }
);

export const HotelOffer: Model<HotelOfferDocument> = model(
    'HotelOffer',
    HotelOfferSchema
);
