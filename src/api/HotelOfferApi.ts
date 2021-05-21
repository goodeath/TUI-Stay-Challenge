import { HotelOfferRepository } from '../repositories/HotelOfferRepository';

export class HotelOfferApi {
    private repository: HotelOfferRepository;

    constructor() {
        this.repository = new HotelOfferRepository();
    }

    public list = async (request: any, response: any): Promise<void> => {
        const { adults, available, roomQuantity, total } = request.query;
        this.repository
            .list({
                adults,
                available,
                roomQuantity,
                total,
            })
            .then((data) => response.send(data));
    };

    public view = async (request: any, response: any): Promise<void> => {
        const { id } = request.params;
        this.repository.view(id).then((data) => response.send(data));
    };

    public listByHotel = async (request: any, response: any): Promise<void> => {
        const { id } = request.params;
        this.repository
            .list({ 'hotel.id': id })
            .then((data) => response.send(data));
    };
}
