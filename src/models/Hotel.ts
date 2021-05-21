import { model, Schema, Model, Document } from 'mongoose';

interface HotelDocument extends Document {
    id: string;
    name: string;
    rating: number;
    cityCode: string;
}

const HotelSchema: Schema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        cityCode: { type: String, required: true },
    },
    { collection: 'hotel' }
);

export const Hotel: Model<HotelDocument> = model('Hotel', HotelSchema);
