import { HotelRepository } from '../repositories/HotelRepository';

export class HotelApi {
    private repository: HotelRepository;

    constructor() {
        this.repository = new HotelRepository();
    }

    public list = async (request: any, response: any): Promise<void> => {
        const { name, cityCode, id, rating } = request.query;
        this.repository
            .list({
                name,
                cityCode,
                id,
                rating,
            })
            .then((data) => response.send(data));
    };
}
