import { Router } from 'express';
import { getCoachPerformanceReport } from '../controllers/reportController';

const router = Router();

// Wrap the controller with a middleware handler to properly handle async functions
router.post('/coach-performance', (req, res, next) => {
  getCoachPerformanceReport(req, res, next)
    .catch(next);
});

export default router;