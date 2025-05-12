import { Document } from 'mongoose';

export interface IWorkout extends Document {
  _id: string;
  coachId: string;
  clientId: string;
  type: string;
  date: string;
  time: string;
  createdAt: Date;
  updatedAt: Date;
  clientStatus: string;
  coachStatus: string;
}

export interface ICoach extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IFeedback extends Document {
  _id: string;
  clientId: string;
  coachId: string;
  workoutId: string;
  comment: string;
  rating: number;
}

export interface ReportFilters {
  startDate: string;
  endDate: string;
  type: string;
}

export interface CoachPerformance {
  gymLocation: string;
  coachName: string;
  email: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  noOfWorkouts: number;
  workoutsPercentChange: string;
  averageFeedback: number;
  minFeedback: number;
  minFeedbackPercentChange: string;
}