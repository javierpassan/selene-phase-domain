import { LocationRepository } from '../../locations/index';
import { UseCase } from '../../shared/application/UseCase';

import { MoonPhaseEventRepository, MOON_PHASES } from '../index';

export class SendMoonPhaseMessagesUseCase implements UseCase {
  constructor(
    private bot: any,
    private moonPhaseEventRepository: MoonPhaseEventRepository,
    private locationRepository: LocationRepository,
  ) {

  }

  async invoke() {
    const now = new Date();
    const moonPhaseEvent = await this.moonPhaseEventRepository.readMoonPhaseEventByDate(now);
    if (!moonPhaseEvent) {
      return;
    }

    const moonPhase = MOON_PHASES.find(moonPhase => moonPhase.name === moonPhaseEvent.name);
    if (!moonPhase) {
      return;
    }

    const iterator = this.locationRepository.createLocationIterator();
    for await (const location of iterator()) {
      const chatId = location.chatId;
      const text = moonPhase.emoji;
      await this.bot.telegram.sendMessage(chatId, text);
    }
  }
}
