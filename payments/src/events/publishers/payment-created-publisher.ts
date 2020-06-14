import { Subjects, Publisher, PaymentCreatedEvent } from '@tiktix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
