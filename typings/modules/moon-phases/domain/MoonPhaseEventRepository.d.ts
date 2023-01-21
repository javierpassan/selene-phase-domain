export interface MoonPhaseEventRepository {
    createMoonPhaseEvent(moonPhaseEvent: any): Promise<any>;
    readMoonPhaseEventByDate(date: Date): Promise<any | null>;
}
//# sourceMappingURL=MoonPhaseEventRepository.d.ts.map