import { Publisher, Subjects, TicketUpdatedEvent } from '@tiktix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
