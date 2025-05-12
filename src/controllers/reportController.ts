import { Request, Response, NextFunction } from 'express';
import reportService from '../services/reportService';
import { ReportFilters } from '../config/types';
import { formatDate } from '../utils/dateUtils';

export const getCoachPerformanceReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: ReportFilters = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      type: req.body.type
    };

    // Validate date format
    if (!filters.startDate || !filters.endDate) {
      return res.status(400).json({ 
        success: false, 
        message: 'Start date and end date are required' 
      });
    }

    // Format dates if necessary
    filters.startDate = formatDate(filters.startDate);
    filters.endDate = formatDate(filters.endDate);

    const report = await reportService.generateCoachPerformanceReport(filters);
    
    return res.status(200).json({
      success: true,
      data: report
    });
  } catch (error) {
    next(error);
  }
};