import { Router } from 'express';
import { HotelOfferApi } from '../api/HotelOfferApi';

const router = Router();
const api = new HotelOfferApi();

router.get('/', api.list);
router.get('/:id', api.view);

export const HotelOfferRouter = router;
