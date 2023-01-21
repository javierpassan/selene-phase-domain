import { UseCase } from "../../shared/application/UseCase";

import { WebhookNotificationRepository } from "../domain/WebhookNotificationRepository";

export class HandleTelegramUpdateUseCase implements UseCase {
  constructor(
    private bot: any,
    private webhookNotificationRepository: WebhookNotificationRepository,
  ) {

  }

  async invoke(request: any) {
    const { body, } = request;

    await this.webhookNotificationRepository.createWebhookNotification({
      body,
      provider: 'telegram',
    });

    const update = body;
    await this.bot.handleUpdate(update);
  }
}
