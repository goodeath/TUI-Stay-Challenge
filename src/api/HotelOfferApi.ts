import { HotelOfferRepository } from '../repositories/HotelOfferRepository';

export class HotelOfferApi {
    private repository: HotelOfferRepository;

    constructor() {
        this.repository = new HotelOfferRepository();
    }

    public list = async (request: any, response: any): Promise<void> => {
        const { id, adults, available, roomQuantity, total } = request.query;
        this.repository
            .list({
                id,
                adults,
                available,
                roomQuantity,
                total,
            })
            .then((data) => response.send(data));
    };
}
