import { Collection } from "mongodb";
import { BaseMongoDbAtlasRepository } from "@modules/shared/infrastructure/persistence/BaseMongoDbAtlasRepository";
import { MoonPhaseEventRepository } from "../domain/MoonPhaseEventRepository";
export declare class MoonPhaseEventMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements MoonPhaseEventRepository {
    constructor(context: Collection);
    createMoonPhaseEvent(moonPhaseEvent: any): Promise<any>;
    readMoonPhaseEventByDate(date: Date): Promise<any>;
}
//# sourceMappingURL=MoonPhaseEventMongoDbAtlasRepository.d.ts.map