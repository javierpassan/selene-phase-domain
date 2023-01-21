import { Telegraf } from 'telegraf';
import { LocationRepository } from '../../locations/domain/LocationRepository';
import { TelegramBot } from '../domain/TelegramBot';
export declare class TelegramTelegrafBot implements TelegramBot {
    private bot;
    private locationRepository;
    private logger;
    constructor(bot: Telegraf, locationRepository: LocationRepository, logger: any);
    setup(): Promise<void>;
}
//# sourceMappingURL=TelegramTelegrafBot.d.ts.map