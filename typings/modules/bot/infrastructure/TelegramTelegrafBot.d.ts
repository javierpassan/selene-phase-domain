import { Telegraf } from 'telegraf';
import { LocationRepository } from '@modules/locations/domain/LocationRepository';
import { TelegramBot } from '../domain/TelegramBot';
export declare class TelegramTelegrafBot implements TelegramBot {
    private bot;
    private logger;
    private locationRepository;
    constructor(bot: Telegraf, logger: any, locationRepository: LocationRepository);
    setup(): Promise<void>;
}
//# sourceMappingURL=TelegramTelegrafBot.d.ts.map