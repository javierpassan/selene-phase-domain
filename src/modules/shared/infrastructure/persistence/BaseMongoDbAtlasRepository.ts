import { Collection } from 'mongodb';

export class BaseMongoDbAtlasRepository {
  constructor(protected context: Collection) { }
}
