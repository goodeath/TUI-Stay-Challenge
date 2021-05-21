import { HotelOffer } from './HotelOffer';

export type Hotel = {
    id: string;
    name: string;
    rating: number;
    cityCode: string;
    offers: HotelOffer[];
};
