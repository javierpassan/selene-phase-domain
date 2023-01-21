import * as SunCalc from 'suncalc';

export class MoonService {
  constructor() {

  }

  getPosition(date: Date, latitude: number, longitude: number) {
    return SunCalc.getMoonPosition(date, latitude, longitude);
  }

  getIllumination(date: Date) {
    return SunCalc.getMoonIllumination(date);
  }

  getTimes(date: Date, latitude: number, longitude: number) {
    return SunCalc.getMoonTimes(date, latitude, longitude, true);
  }
}
