import { MongoClient } from 'mongodb';

import { MoonPhaseEventMongoDbAtlasRepository, MoonService } from '../modules/moon-phases';
import { InitializeMoonPhasesCalendarUseCase } from '../modules/moon-phases/application/InitializeMoonPhasesCalendarUseCase';

const logger = console;

const DEFAULT_DB_CONNECTION_STRING = 'mongodb://localhost:27017';

(async function main(argv) {
  const uri = process.env.DB_CONNECTION_STRING || DEFAULT_DB_CONNECTION_STRING;
  const client = new MongoClient(uri);
  try {
    const database = client.db('selenephase');
    const moonPhaseEventCollection = database.collection('moonphaseevents');
  
    const moonPhaseEventRepository = new MoonPhaseEventMongoDbAtlasRepository(moonPhaseEventCollection);
    const moonService = new MoonService();
    
    const useCase = new InitializeMoonPhasesCalendarUseCase(moonPhaseEventRepository, moonService);
    
    const year = argv[0];
    await useCase.invoke({ year, });
  } catch (error: any) {
    logger.error(error.message);
  } finally {
    await client.close();
  }
})(process.argv.slice(2));
