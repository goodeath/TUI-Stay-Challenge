export type HotelOffer = {
    id: string;
    adults: number;
    available: boolean;
    roomQuantity: number;
    total: string;
    hotel: {
        id: string;
        name: string;
        rating: number;
        cityCode: string;
        weather: any;
    };
};
