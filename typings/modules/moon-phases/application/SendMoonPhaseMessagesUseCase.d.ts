import { LocationRepository } from '../../locations/index';
import { UseCase } from '../../shared/application/UseCase';
import { MoonPhaseEventRepository } from '../index';
export declare class SendMoonPhaseMessagesUseCase implements UseCase {
    private bot;
    private moonPhaseEventRepository;
    private locationRepository;
    constructor(bot: any, moonPhaseEventRepository: MoonPhaseEventRepository, locationRepository: LocationRepository);
    invoke(): Promise<void>;
}
//# sourceMappingURL=SendMoonPhaseMessagesUseCase.d.ts.map