import { MongoClient } from 'mongodb';

import { MoonPhaseEventMongoDbAtlasRepository, MoonService } from '../modules/moon-phases';
import { InitializeMoonPhasesCalendarUseCase } from '../modules/moon-phases/application/InitializeMoonPhasesCalendarUseCase';

const DEFAULT_DB_CONNECTION_STRING = 'mongodb://localhost:27017';

(async function main(argv) {
  const uri = process.env.DB_CONNECTION_STRING || DEFAULT_DB_CONNECTION_STRING;

  const client = new MongoClient(uri);
  const database = client.db('selenephase');
  const moonPhaseEventCollection = database.collection('moonphaseevents');

  const moonPhaseEventRepository = new MoonPhaseEventMongoDbAtlasRepository(moonPhaseEventCollection);
  const moonService = new MoonService();
  
  const useCase = new InitializeMoonPhasesCalendarUseCase(moonPhaseEventRepository, moonService);
  
  const year = argv[0];
  await useCase.invoke({ year, });
})(process.argv.slice(2));
