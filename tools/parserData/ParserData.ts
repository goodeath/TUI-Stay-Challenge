import path from 'path';
import { Hotel } from './pojos/Hotel';
import { HotelOffer } from './pojos/HotelOffer';
import { HotelOfferTransformer } from './transformer/HotelOfferTransformer';
import { HotelTransformer } from './transformer/HotelTransformer';
import { readDir, readFiles, writeFile } from './utils';

const hotelDataPath = path.join(__dirname, 'hotelsData');
const weatherDataPath = path.join(__dirname, 'weatherData');
const OUTPUT_PATH = path.join(__dirname, 'output');

const parseHotelInformation = (
    hotelData: any,
    offersData: any,
    isAvailable: boolean
) => {
    let offers: HotelOffer[] = offersData.map((offer: any) =>
        HotelOfferTransformer(offer, isAvailable)
    );

    const hotelFormat = HotelTransformer(hotelData);

    const hotel: Hotel = {
        ...hotelFormat,
        offers: offers.map((offer) => {
            let tmp = { ...offer };
            tmp.total = <any>parseFloat(offer.total);
            return tmp;
        }),
    };

    delete hotelFormat.offers;

    offers = offers.map((offer) => ({ ...offer, hotel: hotelFormat }));
    return { hotel, offers };
};

(async () => {
    const hotelFilesPromise = readDir(hotelDataPath, ['.gitkeep']);
    const weatherFilesPromise = readDir(weatherDataPath, ['.gitkeep']);

    const [hotelFiles, weatherFiles] = await Promise.all([
        hotelFilesPromise,
        weatherFilesPromise,
    ]);

    let hotelCollection: Hotel[] = [];
    let offerCollection: HotelOffer[] = [];
    let weatherCollection = [];

    const collectionPromises = hotelFiles.map(async (file) => {
        const buffer: Buffer = await readFiles(path.join(hotelDataPath, file));

        const json = JSON.parse(Buffer.from(buffer).toString('utf8'));
        json.data.map((data: any) => {
            const { hotel, offers } = parseHotelInformation(
                data.hotel,
                data.offers,
                data.available
            );
            hotelCollection.push(hotel);
            offerCollection = [...offerCollection, ...offers];
        });
    });

    await Promise.all(collectionPromises);

    const writingPromises = [
        writeFile(
            path.join(OUTPUT_PATH, 'hotel.json'),
            JSON.stringify(hotelCollection)
        ),
        writeFile(
            path.join(OUTPUT_PATH, 'offers.json'),
            JSON.stringify(offerCollection)
        ),
    ];

    await Promise.all(writingPromises);
})();
