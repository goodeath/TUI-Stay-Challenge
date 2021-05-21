import { HotelRepository } from '../../src/repositories/HotelRepository';
import { afterTestSuit, beforeTestSuit } from '../setupTests';

describe('Hotel Repository', () => {
    beforeAll(async (done) => {
        await beforeTestSuit();
        done();
    });

    it('List hotels', async (done) => {
        const repository = new HotelRepository();

        const data = await repository.list({
            id: 'HSCBPAAC',
        });
        const attributes = JSON.parse(JSON.stringify(data));
        delete attributes[0]['_id'];
        expect(attributes).toEqual([
            {
                id: 'HSCBPAAC',
                cityCode: 'CBP',
                name: 'Oslo',
                rating: 3,
                offers: [
                    {
                        adults: 2,
                        id: '56IWNKPAD3',
                        available: true,
                        roomQuantity: 1,
                        total: 108.3,
                    },
                    {
                        adults: 2,
                        id: 'CUOHX3OG1D',
                        available: true,
                        roomQuantity: 1,
                        total: 114,
                    },
                ],
            },
        ]);
        done();
    });

    afterAll(async (done) => {
        await afterTestSuit();
        done();
    });
});
