import * as SunCalc from 'suncalc';
export declare class MoonService {
    constructor();
    getPosition(date: Date, latitude: number, longitude: number): SunCalc.GetMoonPositionResult;
    getIllumination(date: Date): SunCalc.GetMoonIlluminationResult;
    getTimes(date: Date, latitude: number, longitude: number): SunCalc.GetMoonTimes;
}
//# sourceMappingURL=MoonService.d.ts.map