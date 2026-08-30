import {
  getTimelineSeasons,
  CarAward,
  CarSpecItem,
  CARS_DATABASE,
  CARS_LIST,
  CURRENT_CAR
} from './carsDatabase';

export type TimelineAward = CarAward;
export type TimelineSpecItem = CarSpecItem;

export interface TimelineSeason {
  id: string;
  yearSpan: string;
  shortYear: string;
  seasonName: string;
  carModel: string;
  title: string;
  tagline: string;
  badge: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'brand';
  circuitLocation: string;
  image: string;
  fallbackImage: string;
  imageCaption: string;
  description: string;
  innovations: string[];
  specs: {
    weight: string;
    power: string;
    topSpeed: string;
    accel?: string;
    voltage: string;
    batteryCells: string;
    motors: string;
    torque: string;
    downforce: string;
    dimensions: string;
    driveType: string;
    tyres: string;
  };
  keySpecsSummary: TimelineSpecItem[];
  awards: TimelineAward[];
  trackProgress: number;
  circuitTurn: string;
}

/**
 * 5 Seasons / Car Generations of ART TU Formula Student
 * Generated dynamically from single source of truth: src/data/carsDatabase.ts
 */
export const timelineSeasons: TimelineSeason[] = getTimelineSeasons();

export { CARS_DATABASE, CARS_LIST, CURRENT_CAR };
