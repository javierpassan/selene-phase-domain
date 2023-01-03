import { Markup, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

import { LocationRepository } from '@modules/locations/domain/LocationRepository';

import { TelegramBot } from '../domain/TelegramBot';

export class TelegramTelegrafBot implements TelegramBot {

  constructor(
    private bot: Telegraf,
    private logger: any,
    private locationRepository: LocationRepository
  ) {
  }

  async setup(): Promise<void> {
    const COMMAND_SETLOCATION = 'setlocation';
    const COMMAND_SHOWLOCATION = 'showlocation';

    this.bot.start((botContext) => botContext.reply('Welcome'));

    this.bot.command(COMMAND_SETLOCATION, (botContext) => {
      this.logger.log(JSON.stringify({ command: COMMAND_SETLOCATION, }));
      return botContext.reply(
        'What is your location?',
        Markup
          .keyboard([
            Markup.button.locationRequest('Send location'),
          ])
          .oneTime()
          .resize()
      );
    });

    this.bot.command(COMMAND_SHOWLOCATION, async (botContext) => {
      const message = botContext.message;
      this.logger.log(JSON.stringify({ command: COMMAND_SHOWLOCATION, context: { message, } }));
      const chatId = message.chat.id;
      const location = await this.locationRepository.readLastLocationByChatId(chatId);
      if (!location) {
        return botContext.reply('Location was not previously set.');
      }
      const latitude = location.latitude;
      const longitude = location.longitude;
      return botContext.replyWithLocation(latitude, longitude);
    });

    this.bot.on(message('location'), async (botContext) => {
      const message = botContext.message;
      this.logger.log(JSON.stringify({ on: 'message:location', context: { message, } }));
      const isSetLocationCommandReply = message.reply_to_message && (message.reply_to_message as any).text === 'What is your location?';
      if (!isSetLocationCommandReply) {
        return;
      }
      const chatId = message.chat.id;
      const latitude = message.location.latitude;
      const longitude = message.location.longitude;
      await this.locationRepository.createLocation({ chatId, latitude, longitude, });
      return botContext.replyWithLocation(latitude, longitude);
    });
  }
}
