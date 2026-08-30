import { CURRENT_CAR, CarHotspot } from './carsDatabase';

export type Hotspot = CarHotspot;

/**
 * Interactive Hotspots for the current active racecar (/car)
 * Backed by src/data/carsDatabase.ts
 */
export const carHotspots: Hotspot[] = CURRENT_CAR.hotspots || [];

/**
 * Main Technical Specifications Matrix (/car)
 * Backed by src/data/carsDatabase.ts
 */
export const mainCarSpecs = CURRENT_CAR.specGroups;

export { CURRENT_CAR, CARS_DATABASE, CARS_LIST } from './carsDatabase';
