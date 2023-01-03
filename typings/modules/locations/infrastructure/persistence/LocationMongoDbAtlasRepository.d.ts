import { Collection } from 'mongodb';
import { BaseMongoDbAtlasRepository } from '@modules/shared/infrastructure/persistence/BaseMongoDbAtlasRepository';
import { LocationDto } from '../../domain/LocationDto';
import { LocationRepository } from '../../domain/LocationRepository';
export declare class LocationMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements LocationRepository {
    constructor(context: Collection);
    createLocation(locationDto: LocationDto): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    readLastLocationByChatId(chatId: number): Promise<import("mongodb").WithId<import("bson").Document>>;
}
//# sourceMappingURL=LocationMongoDbAtlasRepository.d.ts.map