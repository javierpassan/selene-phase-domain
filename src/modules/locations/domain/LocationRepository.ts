import { Document } from 'mongodb';
import { LocationDto } from './LocationDto';

export interface LocationRepository {
  createLocation(locationDto: LocationDto): Promise<any>;
  createLocationIterator(): any;
  readLastLocationByChatId(chatId: number): Promise<any | null>;
}
