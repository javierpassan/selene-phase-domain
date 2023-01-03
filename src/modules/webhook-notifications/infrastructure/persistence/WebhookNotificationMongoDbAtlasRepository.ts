import { Collection } from 'mongodb'

import { BaseMongoDbAtlasRepository } from '../../../shared/infrastructure/persistence/BaseMongoDbAtlasRepository'

import { WebhookNotificationDto } from '../../domain/WebhookNotificationDto'
import { WebhookNotificationRepository } from '../../domain/WebhookNotificationRepository'

export class WebhookNotificationMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements WebhookNotificationRepository {
  constructor(context: Collection) {
    super(context)
  }

  async createWebhookNotification(webhookNotificationDto: WebhookNotificationDto) {
    const {
      body,
      provider
    } = webhookNotificationDto;
    return this.context.insertOne({
      body,
      createdOn: new Date(),
      provider,
    })
  }
}
