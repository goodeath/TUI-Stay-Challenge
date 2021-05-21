import { Router } from 'express';
import { HotelOfferApi } from '../api/HotelOfferApi';

const router = Router();
const api = new HotelOfferApi();

router.get('/', api.list);

export const HotelOfferRouter = router;
