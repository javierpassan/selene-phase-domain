import { UseCase } from "../../shared/application/UseCase";
import { WebhookNotificationRepository } from "../domain/WebhookNotificationRepository";
export declare class HandleTelegramUpdateUseCase implements UseCase {
    private bot;
    private webhookNotificationRepository;
    constructor(bot: any, webhookNotificationRepository: WebhookNotificationRepository);
    invoke(request: any): Promise<void>;
}
//# sourceMappingURL=HandleTelegramUpdateUseCase.d.ts.map