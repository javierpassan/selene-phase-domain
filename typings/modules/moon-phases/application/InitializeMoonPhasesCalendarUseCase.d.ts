import { UseCase } from '../../shared/application/UseCase';
import { MoonService } from '../index';
import { MoonPhaseEventRepository } from '../domain/MoonPhaseEventRepository';
export declare class InitializeMoonPhasesCalendarUseCase implements UseCase {
    private moonPhaseEventRepository;
    private moonService;
    private readonly moonPhases;
    constructor(moonPhaseEventRepository: MoonPhaseEventRepository, moonService: MoonService);
    invoke(request: any): Promise<void>;
    private getMoonPhaseDetails;
}
//# sourceMappingURL=InitializeMoonPhasesCalendarUseCase.d.ts.map