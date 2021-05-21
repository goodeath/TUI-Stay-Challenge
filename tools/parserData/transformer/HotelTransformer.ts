import { Hotel } from '../pojos/Hotel';

export const HotelTransformer = (hotel: any): Hotel => {
    return {
        id: hotel.hotelId,
        cityCode: hotel.cityCode,
        name: hotel.name,
        rating: parseInt(hotel.rating),
        offers: [],
    };
};
