import { Publisher, OrderCancelledEvent, Subjects } from '@tiktix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
