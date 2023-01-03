import { Collection } from 'mongodb';
import { BaseMongoDbAtlasRepository } from '@modules/shared/infrastructure/persistence/BaseMongoDbAtlasRepository';
import { WebhookNotificationDto } from '../../domain/WebhookNotificationDto';
import { WebhookNotificationRepository } from '../../domain/WebhookNotificationRepository';
export declare class WebhookNotificationMongoDbAtlasRepository extends BaseMongoDbAtlasRepository implements WebhookNotificationRepository {
    constructor(context: Collection);
    createWebhookNotification(webhookNotificationDto: WebhookNotificationDto): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
}
//# sourceMappingURL=WebhookNotificationMongoDbAtlasRepository.d.ts.map