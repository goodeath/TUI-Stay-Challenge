import { HotelOfferRepository } from '../../src/repositories/HotelOfferRepository';
import { afterTestSuit, beforeTestSuit } from '../setupTests';

describe('Hotel Repository', () => {
    beforeAll(async (done) => {
        await beforeTestSuit();
        done();
    });

    it('View Offer', async (done) => {
        const repository = new HotelOfferRepository();
        const data = await repository.view('TR4MD42FL5');
        const attributes = JSON.parse(JSON.stringify(data));
        delete attributes['_id'];
        expect(attributes).toEqual({
            hotel: {
                id: 'RTSAOPCT',
                cityCode: 'SAO',
                name: 'Mercure Sao Paulo Central Towers Hotel',
                rating: 4,
            },
            adults: 1,
            id: 'TR4MD42FL5',
            available: true,
            roomQuantity: 1,
            total: 1065,
        });
        done();
    });

    it('List Offers By Hotel', async (done) => {
        const repository = new HotelOfferRepository();
        const data = await repository.list({ 'hotel.id': 'HSCBPAAC' });
        const attributes = JSON.parse(JSON.stringify(data)).map((data: any) => {
            delete data['_id'];
            return data;
        });
        expect(attributes).toEqual([
            {
                hotel: {
                    id: 'HSCBPAAC',
                    cityCode: 'CBP',
                    name: 'Oslo',
                    rating: 3,
                },
                adults: 2,
                id: '56IWNKPAD3',
                available: true,
                roomQuantity: 1,
                total: 108.3,
            },
            {
                hotel: {
                    id: 'HSCBPAAC',
                    cityCode: 'CBP',
                    name: 'Oslo',
                    rating: 3,
                },
                adults: 2,
                id: 'CUOHX3OG1D',
                available: true,
                roomQuantity: 1,
                total: 114,
            },
        ]);
        done();
    });

    it('List Offers', async (done) => {
        const repository = new HotelOfferRepository();
        const data = await repository.list({ 'hotel.cityCode': 'SAO' });
        const attributes = JSON.parse(JSON.stringify(data)).map((data: any) => {
            delete data['_id'];
            return data;
        });
        expect(attributes).toEqual([
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: 'TR4MD42FL5',
                available: true,
                roomQuantity: 1,
                total: 1065,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: '8K991VVB7Y',
                available: true,
                roomQuantity: 1,
                total: 1595,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: '0FASXOZY5Z',
                available: true,
                roomQuantity: 1,
                total: 183.8,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: 'RDXHWIUUGQ',
                available: true,
                roomQuantity: 1,
                total: 178.8,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: '2YN56IPYUP',
                available: true,
                roomQuantity: 1,
                total: 375.95,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: 'DORAT33UOX',
                available: true,
                roomQuantity: 1,
                total: 370.95,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: 'AJAMEYGG29',
                available: true,
                roomQuantity: 1,
                total: 1065,
            },
            {
                hotel: {
                    id: 'RTSAOPCT',
                    cityCode: 'SAO',
                    name: 'Mercure Sao Paulo Central Towers Hotel',
                    rating: 4,
                },

                adults: 1,
                id: '87DO9J9Z9S',
                available: true,
                roomQuantity: 1,
                total: 1595,
            },
        ]);
        done();
    });

    afterAll(async (done) => {
        await afterTestSuit();
        done();
    });
});
