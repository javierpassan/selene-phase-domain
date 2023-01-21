import { Collection, ObjectId, } from 'mongodb';

import { BaseMongoDbAtlasRepository } from '../../../shared/infrastructure/persistence/BaseMongoDbAtlasRepository';

import { LocationDto } from '../../domain/LocationDto';
import { LocationRepository } from '../../domain/LocationRepository';

export class LocationMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements LocationRepository {
  constructor(context: Collection) {
    super(context);
  }

  async createLocation(locationDto: LocationDto) {
    const {
      chatId,
      latitude,
      longitude
    } = locationDto;
    return this.context.insertOne({
      chatId,
      createdOn: new Date(),
      latitude,
      longitude,
    });
  }

  createLocationIterator() {
    const iteratorContext = this.context;
    return async function* () {
      const documents = await iteratorContext
        .aggregate([
          {
            '$sort': {
              '_id': -1,
            }
          },
          { 
            '$group': {
              '_id': '$chatId',
              'latitude': { '$first': '$latitude', },
              'longitude': { '$first': '$longitude', },
            }
          }
        ])
        .toArray();

      for (const document of documents) {
        yield document;
      }
    };
  }

  async readLastLocationByChatId(chatId: number) {
    const query = {
      chatId: chatId,
    };
    return (await this.context.find(query).sort({ _id: -1 }).limit(1).toArray())[0];
  }
}
