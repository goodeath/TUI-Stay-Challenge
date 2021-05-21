import { Router } from 'express';
import { HotelOfferApi } from '../api/HotelOfferApi';

const router = Router();
const api = new HotelOfferApi();

router.get('/', api.list);
router.get('/:id', api.view);
router.get('/by-hotel/:id', api.listByHotel);
export const HotelOfferRouter = router;
