import { HotelOffer } from '../pojos/HotelOffer';

export const HotelOfferTransformer = (
    offer: any,
    available: boolean
): HotelOffer => {
    return {
        adults: offer.guests.adults,
        id: offer.id,
        available,
        roomQuantity: parseInt(offer.roomQuantity) || 1,
        total: parseFloat(offer.price.total),
    };
};
