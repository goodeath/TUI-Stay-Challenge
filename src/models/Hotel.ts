import { model, Schema, Model, Document } from 'mongoose';

type Offer = {
    id: string;
    adults: number;
    available: boolean;
    roomQuantity: number;
    total: number;
};
interface HotelDocument extends Document {
    id: string;
    name: string;
    rating: number;
    cityCode: string;
    offers: Offer[];
}

const HotelSchema: Schema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        cityCode: { type: String, required: true },
        offers: [
            {
                id: String,
                adults: Number,
                available: Boolean,
                roomQuantity: Number,
                total: Number,
            },
        ],
    },
    { collection: 'hotel' }
);

export const Hotel: Model<HotelDocument> = model('Hotel', HotelSchema);
