import { LocationDto } from './LocationDto';
export interface LocationRepository {
    createLocation(locationDto: LocationDto): Promise<any>;
    readLastLocationByChatId(chatId: number): Promise<any | null>;
}
//# sourceMappingURL=LocationRepository.d.ts.map