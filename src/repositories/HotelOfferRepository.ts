import { HotelOffer } from '../models/HotelOffer';
import { omitUndefined } from '../utils/omitUndefined';

export class HotelOfferRepository {
    public async list(query: QueryParams) {
        query = omitUndefined(query);
        return HotelOffer.find(query);
    }

    public async view(id: string) {
        return HotelOffer.findOne({ id });
    }
}

type QueryParams = {
    id?: string;
    adults?: number;
    available?: boolean;
    roomQuantity?: number;
    total?: number;
    'hotel.id'?: string;
};
