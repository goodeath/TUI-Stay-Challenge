import { model, Schema, Model, Document } from 'mongoose';

interface HotelOfferDocument extends Document {
    id: string;
    adults: number;
    available: boolean;
    roomQuantity: number;
    total: number;
}

const HotelOfferSchema: Schema = new Schema(
    {
        id: { type: String, required: true },
        adults: { type: Number, required: true },
        roomQuantity: { type: Number, required: true },
        total: { type: Number, required: true },
        available: { type: Boolean, required: true },
    },
    { collection: 'hotel-offer' }
);

export const HotelOffer: Model<HotelOfferDocument> = model(
    'HotelOffer',
    HotelOfferSchema
);
