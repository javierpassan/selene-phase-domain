import { Collection } from "mongodb";
import dayjs from 'dayjs';

import { BaseMongoDbAtlasRepository } from "../../../shared/infrastructure/persistence/BaseMongoDbAtlasRepository";

import { MoonPhaseEventRepository } from "../../domain/MoonPhaseEventRepository";

export class MoonPhaseEventMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements MoonPhaseEventRepository {
  constructor(context: Collection) {
    super(context);
  }

  async createMoonPhaseEvent(moonPhaseEvent: any): Promise<any> {
    const {
      name,
      occuredOn,
    } = moonPhaseEvent;
    return this.context.insertOne({
      name,
      occuredOn,
    });
  }
  
  async readMoonPhaseEventByDate(date: Date): Promise<any> {
    const dateStarOfDay = dayjs(date).startOf('day');
    const dateEndOfDay = dayjs(date).endOf('day');
    const query = {
      occuredOn: {
        '$gte': dateStarOfDay.toDate(),
        '$lte': dateEndOfDay.toDate(),
      }
    };
    return this.context.findOne(query);
  }
}
