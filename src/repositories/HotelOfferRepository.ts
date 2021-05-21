import { HotelOffer } from '../models/HotelOffer';
import { omitUndefined } from '../utils/omitUndefined';

export class HotelOfferRepository {
    public async list(query: QueryParams) {
        query = omitUndefined(query);
        return HotelOffer.find(query);
    }
}

type QueryParams = {
    id?: string;
    adults?: number;
    available?: boolean;
    roomQuantity?: number;
    total?: number;
};
