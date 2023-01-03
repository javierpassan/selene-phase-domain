import { WebhookNotificationDto } from './WebhookNotificationDto';

export interface WebhookNotificationRepository {
  createWebhookNotification(notificationDto: WebhookNotificationDto): Promise<any>;
}
