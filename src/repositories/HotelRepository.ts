import { Hotel } from '../models/Hotel';
import { omitUndefined } from '../utils/omitUndefined';

export class HotelRepository {
    public async list(query: QueryParams) {
        query = omitUndefined(query);
        return Hotel.find(query);
    }
}

type QueryParams = {
    id?: string;
    name?: string;
    rating?: number;
    cityCode?: string;
};
