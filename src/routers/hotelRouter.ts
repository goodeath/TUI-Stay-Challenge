import { Router } from 'express';
import { HotelApi } from '../api/HotelApi';

const router = Router();
const api = new HotelApi();

router.get('/', api.list);

export const HotelRouter = router;
